import React, { useEffect, useState } from 'react'
import { auth, db } from '../config/firebase-config'
import Popup from 'reactjs-popup';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';

const Saved = () => {

    const [recipes, setRecipes] = useState([]);

    const signOut = () => {
        auth.signOut();
        window.location.href = '/';
    }

    const recipeCollectionRef = collection(db, "recipes");
    const getRecipes = async () => {
        try {
            var data = await getDocs(recipeCollectionRef);
            var filterData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            const finalData = filterData.filter(
                (recipe) => recipe.email === auth?.currentUser?.email
            );
            // console.log(finalData)
            setRecipes(finalData);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getRecipes();
    }, [])

    let closePopup;

    const handleDeleteRecipe = async(id) => {
        try {
            const recipeDoc = doc(db, "recipes", id)
            await deleteDoc(recipeDoc)
            getRecipes();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <nav className='flex justify-between items-center px-5 py-2 bg-green-400'>
                <h1 className='text-2xl font-semibold'>Hello, {auth?.currentUser?.displayName}</h1>
                <div className="flex gap-5">
                    <button className='bg-blue-500 px-4 py-2 rounded-full font-semibold text-white' onClick={()=> window.location.href = '/chat'}>Go to home</button>
                    <button className='bg-red-500 px-4 py-2 rounded-full font-semibold text-white' onClick={signOut}>Logout</button>
                </div>
            </nav>
            <div className="flex flex-wrap w-full justify-center items-center p-5 gap-5">
                {
                    recipes.length > 0 ? (
                        recipes.map((item) => (
                            <Popup
                                key={item.id}
                                className="fixed inset-0 flex justify-center items-center"
                                trigger={
                                    <div className='bg-gradient-to-tr from-yellow-200 to-amber-300 rounded-md p-5 w-1/4 h-[45vh] overflow-hidden'>
                                        <div className='text-wrap generatorClass' dangerouslySetInnerHTML={{ __html: item.content }} />
                                    </div>
                                }
                                position="center center"
                                modal
                                // closeOnDocumentClick={false} // To prevent closing on document click
                                ref={(ref) => (closePopup = ref && ref.close)}
                            >
                                <div className="bg-none border-slate-300 border-2 backdrop-blur-xl flex flex-col justify-center items-center text-black p-2 shadow-lg rounded-md h-[80vh] w-[55vw]">
                                    {/* bg-gradient-to-br from-[#292929] to-[#252525] */}
                                    <div className='p-5 overflow-y-scroll no-scrollbar'>
                                        <div className='text-wrap generatorClass' dangerouslySetInnerHTML={{ __html: item.content }} />
                                    </div>

                                    <button
                                        className="rounded-md px-3 py-2 m-3 w-1/2 text-xl bg-red-500 text-white font-semibold hover:bg-red-600 hover:text-black duration-700"
                                        onClick={() => handleDeleteRecipe(item.id)}
                                    >
                                        Remove from saved
                                    </button>
                                </div>
                            </Popup>
                        ))
                    )
                        : (
                            <h1>No saved recipies</h1>
                        )
                }




            </div>
        </div>
    )
}

export default Saved