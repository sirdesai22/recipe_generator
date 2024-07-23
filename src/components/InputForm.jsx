import React, { useState } from 'react'

const Form = ({ generateRecipe }) => {
  const [temp, setTemp] = useState(false);
  const [mood, setMood] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [mealType, setMealType] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [complexcity, setComplexcity] = useState("");

  const createPrompt = () => {
    let prompt = `Generate a recipe using the following instructions only: 
    INGREDIENTS = ${ingredients}
    MEAL TYPE = ${mealType}
    COOKING TIME = ${cookingTime}
    COMPLEXITY TYPE = ${complexcity}
    MOOD = ${mood}
    CILMATE = ${temp}

    Generate the recipe strictly in the following format:
    Recipie Name
    Description: (make it short)
    List of Ingredients: (make it in points)
    Cooking instructions: (make it in points)
    Nutrition Value: (make it in points) (Carbs, protein, etc.)

    Make sure that you wrap the headings in html tags such as h1 and h2 and other text in p tags and lists in proper formated ul li tags.
    Also add emojis to make it look nice.
    Strictly use the above given ingredients only, you can add other ingredients that are most common in an household only!
    `;

    generateRecipe(prompt);
  };


  return (
    <div className='border-4 w-[50%] h-full border-black bg-green-400 rounded-lg p-5 flex flex-col justify-center gap-10' style={{ background: 'url(/food_form.png)', backgroundSize: 'cover' }}>

      <div className='flex justify-evenly'>
        <button onClick={() => { setTemp(!temp) }} className={`px-4 py-2 text-xl font-semibold text-white ${temp ? "bg-gradient-to-br from-orange-500 to-amber-400" : "bg-gray-400"} rounded-md shadow-xl w-2/5`}>Climate</button>

        <select onChange={(e) => setMood(e.target.value)} name="mealType" defaultValue="" className='p-2 text-xl rounded-md shadow-xl w-1/2 bg-cyan-500 font-semibold text-white'>
          <option value="" disabled>How's your mood?</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="exited">Exited</option>
          <option value="angry">Angry</option>
        </select>
      </div>

      <input type="text" className='p-2 text-xl w-full rounded-md shadow-xl' placeholder='Enter ingredients'  onChange={(e) => setIngredients(e.target.value)} value={ingredients}/>

      <select onChange={(e) => setMealType(e.target.value)} name="mealType" defaultValue="" className='p-2 text-xl w-full rounded-md shadow-xl'>
        <option value="" disabled>Select your meal type</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="snacks">Snacks</option>
        <option value="dinner">Dinner</option>
      </select>

      <select onChange={(e) => setCookingTime(e.target.value)} name="cookingTime" defaultValue="" className='p-2 text-xl w-full rounded-md shadow-xl'>
        <option value="" disabled>Select cooking time</option>
        <option value="within 5-10 mins">Within 5-10 mins</option>
        <option value="less than 30 mins">Less than 30 mins</option>
        <option value="less than 1 hour">Less than 1 hour</option>
        <option value="more than an hour">More than an hour</option>
      </select>

      <select onChange={(e) => setComplexcity(e.target.value)} name="complexcity" defaultValue='' className='p-2 text-xl w-full rounded-md shadow-xl'>
        <option value="" disabled>Select complexcity</option>
        <option value="beginner">Beginner</option>
        <option value="amature">Amature</option>
        <option value="intermediate">Intermediate</option>
        <option value="master-chef">Master Chef</option>
      </select>

      <button onClick={createPrompt} className='px-4 py-2 text-xl font-semibold text-white bg-emerald-500 rounded-md shadow-xl'>Generate!</button>
    </div>
  )
}

export default Form