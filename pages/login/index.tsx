import React from 'react'
import {BiUserCircle}  from 'react-icons/bi';
export default function IndexLogin() {
  return (
    <div className='w-full border-2 border-black mx-w-7xl mx-auto'>
        <div className='flex h-screen justify-center items-center'>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className='border-2 border-black'>
                    <BiUserCircle/>
                    <div>
                        <input type='text' placeholder='Phone number'/>
                        <input type='submit' value={'Login'}/>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
