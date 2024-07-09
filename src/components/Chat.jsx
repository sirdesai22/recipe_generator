import React from 'react'
import InputForm from './InputForm'
import Generator from './Generator'

const Chat = () => {
  return (
    <div className='flex gap-5 h-screen items-center justify-between p-5 bg-green-100'>
        <InputForm />
        <Generator />
    </div>
  )
}

export default Chat