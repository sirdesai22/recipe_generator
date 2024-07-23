import { signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, googleProvider } from '../config/firebase-config';

const Login = () => {
    const [index, setIndex] = useState();
    const food = {
        a: ['🍔', '🥞', '🥙', '🥪', '🌮', '🥐', '🍱', '🍜', '🥕', '🍫'],
        b: ['🥞', '🥪', '🥕', '🍫', '🥐', '🍱', '🥙', '🌮', '🍔', '🍜'],
        c: ['🍜', '🍔', '🥪', '🥙', '🍱', '🥞', '🥕', '🍫', '🥐', '🌮']
    }
    
    useEffect(() => {
        const updateIndex = () => {
            const x = Math.floor(Math.random() * 9);
            setIndex(x);
        };

        const timeoutId = setInterval(updateIndex, 1000);

        return () => clearInterval(timeoutId); // Clear interval if the component unmounts or updates
    }, []);

    const handleLogin = async() => {
        try {
            await signInWithPopup(auth, googleProvider)
            window.location.href = "/chat"
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className='flex flex-col justify-center items-center gap-5 h-screen bg-gradient-to-br from-green-400 to-emerald-600 text-white'>
        <div className='text-8xl flex justify-evenly w-full'>
            <span className='text-shadow'>{food.a[index]}</span>
            <span className='text-shadow'>{food.b[index]}</span>
            <span className='text-shadow'>{food.c[index]}</span>
        </div>
        <h1 className='text-8xl font-bold'>Your perfect recipe in seconds.</h1>
        <button
        onClick={handleLogin}
          className="mt-8 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 text-center text-xl inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
        >
          <svg
            className="w-6 h-6 me-2 -ms-1 text-[#626890]"
            xmlns="http://www.w3.org/2000/svg"
            width="2443"
            height="2500"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 256 262"
            id="google"
          >
            <path
              fill="#4285F4"
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            ></path>
            <path
              fill="#34A853"
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            ></path>
            <path
              fill="#FBBC05"
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            ></path>
            <path
              fill="#EB4335"
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            ></path>
          </svg>
          Login using Google
        </button>
    </div>
  )
}

export default Login