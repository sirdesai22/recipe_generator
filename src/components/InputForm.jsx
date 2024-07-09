import React from 'react'

const Form = () => {
  return (
    <div className='border-4 w-[50%] h-full border-black bg-green-400 rounded-lg p-5 flex flex-col justify-center gap-10' style={{background: 'url(/food_form.png)', backgroundSize: 'cover'}}>
      <input type="text" className='p-2 text-xl w-full rounded-md shadow-xl' placeholder='Enter ingredients'/>

      <select name="mealType" defaultValue="none" className='p-2 text-xl w-full rounded-md shadow-xl'>
        <option value="none" disabled>Select your meal type</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="snacks">Snacks</option>
        <option value="dinner">Dinner</option>
      </select>

      <select name="cookingTime" defaultValue="none" className='p-2 text-xl w-full rounded-md shadow-xl'>
        <option value="none" disabled>Select cooking time</option>
        <option value="within 5-10 mins">Within 5-10 mins</option>
        <option value="less than 30 mins">Less than 30 mins</option>
        <option value="less than 1 hour">Less than 1 hour</option>
        <option value="more than an hour">More than an hour</option>
      </select>

      <select name="complexcity" defaultValue='none' className='p-2 text-xl w-full rounded-md shadow-xl'>
        <option value="none" disabled>Select complexcity</option>
        <option value="beginner">Beginner</option>
        <option value="amature">Amature</option>
        <option value="intermediate">Intermediate</option>
        <option value="master-chef">Master Chef</option>
      </select>

      <button className='px-4 py-2 text-xl font-semibold text-white bg-emerald-500 rounded-md shadow-xl'>Generate!</button>
    </div>
  )
}

export default Form