import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex py-3 flex-wrap justify-around'>
        <h1 className='text-xl font-semibold'>TODO APP</h1>
        <ul className=" flex gap-[40px] text-base">
            <li className="">Home</li>
            <li className="">Products</li>
            <li className="">About</li>
            <li className="">Contact</li>
        </ul>


    </nav>
  )
}

export default Navbar