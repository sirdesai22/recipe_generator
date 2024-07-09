import React from 'react'

const Generator = () => {
  return (
    <div className='flex gap-5 flex-col border-4 w-[50%] h-full border-black bg-slate-300 rounded-md px-5 py-2 overflow-y-scroll no-scrollbar text-xl'>
      <div className='flex justify-between items-center'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow-md font-semibold'>View saved</button>
        <button className='bg-green-500 text-white px-4 py-2 rounded-lg text-sm shadow-md font-semibold'>Save Recipie</button>
      </div>

      <h1 className='text-4xl font-bold'>Recipie Name</h1>
      <p><span className='font-semibold'>Description: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, perspiciatis est eaque necessitatibus voluptatem quas iste sapiente reprehenderit aut quasi quo rerum? Neque, voluptate possimus?</p>
      <p className='font-semibold text-2xl'>Ingredients:</p>
      <ul>
        <li>Ingredient X</li>
        <li>Ingredient X</li>
        <li>Ingredient X</li>
        <li>Ingredient X</li>
        <li>Ingredient X</li>
        <li>Ingredient X</li>
        <li>Ingredient X</li>
        <li>Ingredient X</li>
        <li>Ingredient X</li>
        <li>Ingredient X</li>
      </ul>
      <p><span className='font-semibold'>Instructions: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque, quas unde eveniet, repudiandae veritatis nemo temporibus accusantium ducimus omnis excepturi perferendis cum similique expedita, consectetur dignissimos animi nisi ipsam fugit alias in! Dolore maxime deleniti optio architecto magni esse nam similique, natus fuga fugit dolorum placeat earum odit dignissimos.</p>
    </div>
  )
}

export default Generator