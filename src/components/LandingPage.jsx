import React from 'react'

const LandingPage = () => {
  const redirectToChat = () => {
    window.location.href = '/chat'
  }

  const textStyle = {
    WebkitTextStrokeWidth: '3px',
    textShadow: '5px 5px #22c55e, 10px 10px black',
    WebkitTextStrokeColor: 'black',
  };

  const textStyle2 = {
    textShadow: '0px 0px 15px black',
  };
  return (
    <div style={{ background: 'url(/food_bg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='h-screen w-full flex flex-col justify-center items-center bg-no-repeat gap-5'>
      <h1 style={textStyle} className='text-9xl font-extrabold text-white'>Meal Master</h1>
      <p className='text-4xl font-bold text-green-600' /*style={textStyle2}*/ >Your goto health companion!</p>
      <button onClick={redirectToChat} className='bg-green-500 px-4 py-2 rounded-full text-white font-semibold text-2xl hover:bg-green-600 shadow-lg'>Get started</button>
    </div>
  )
}

export default LandingPage