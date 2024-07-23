import React, { useEffect, useState } from 'react'
import { auth, db } from '../config/firebase-config'
import { addDoc, collection } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Generator = ({ result }) => {

  const [htmlContent, setHtmlContent] = useState(result);

  useEffect(() => {
    setHtmlContent(result);
  }, [result])


  const [user, setUser] = useState(false);

  auth.onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      console.log(auth.currentUser.email)
      setUser(true);
    } else {
      // User is not logged in
      setUser(false);
    }
  });

  const recipeCollectionRef = collection(db, "recipes");
  const handleSaveRecipe = async() => {
    if (!user)
      window.location.href = '/login';
    else {
      //Save doc to DB
      try {
        await addDoc(recipeCollectionRef, {
          email: auth?.currentUser?.email,
          content: result,
        });
        toast.success('Recipe saved!')
      } catch (error) {
        console.log(error);
      }
    }
  }

  const viewSaved = () => {
    window.location.href = `/saved`;
  }

  const renderHTML = () => {
    return { __html: result };
  };


  return (
    <div className='flex gap-5 flex-col border-4 w-[50%] h-full border-black bg-blue-100 rounded-md px-5 py-2 overflow-y-scroll no-scrollbar text-xl'>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        transition:Bounce
      />
      <div className='flex justify-between items-center'>

        {user
          ? (<button
            className={`bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow-md font-semibold`}
            onClick={viewSaved}>View saved</button>)
          :
          (<button
            className={`bg-red-500 text-white px-4 py-2 rounded-lg text-sm shadow-md font-semibold`}
            onClick={handleSaveRecipe}>Login</button>)
        }
        <button
          onClick={handleSaveRecipe} className='bg-green-500 text-white px-4 py-2 rounded-lg text-sm shadow-md font-semibold'>Save Recipe</button>
      </div>

      <div className='text-wrap generatorClass' dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  )
}

export default Generator