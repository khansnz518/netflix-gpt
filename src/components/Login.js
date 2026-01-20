import React, { useState } from 'react'
import { Header } from './Header'

export const Login = () => {
    const [isSignForm, setIsSignForm] = useState(true)

    const toggleSignForm = () => {
        setIsSignForm(!isSignForm)
    }
    return (
        <div>
            <Header />
            <div className=' absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_large.jpg'
                    alt='background-logo' />
            </div>
            <form className=' p-12 bg-black w-3/12 my-36 absolute mx-auto right-0 left-0 text-white rounded-lg opacity-80'   >
                <h1 className=' font-bold text-xl text-white py-2'>{isSignForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
                <input type='email' placeholder='Email Address' className=' p-4 my-4 w-full bg-gray-700' />
                <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <button className=' p-4 my-6 bg-red-700  w-full rounded-lg'>{isSignForm ? 'Sign In' : 'Sign Up'}</button>
                <p className=' py-4' onClick={toggleSignForm}>
                    {isSignForm ? 'New to Netflix? Sign Up Now' : 'Already register? Sign In Now. '}
                </p>
            </form>
        </div>
    )
}
