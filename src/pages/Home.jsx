import React, { useState } from 'react'
import ItemList from '../components/ItemList'
import NewTodo from '../components/NewTodo'

export default function Home() {

    const [showNewTodo, setShowNewTodo] = useState(false)

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-[#1d3557] text-black'>

            <div className={`${showNewTodo ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-200 absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.6)]`}>
                <NewTodo setShowNewTodo={setShowNewTodo} />
            </div>

            <div className='w-[95%] md:w-full p-2 max-w-md bg-[#f1faee] rounded-md shadow-sm'>
                <div className='flex justify-between items-center mb-3'>
                    <h1 className="text-3xl tracking-wide">TodoList</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"
                        onClick={() => setShowNewTodo(true)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>

                <div className='h-[1px] w-full bg-black mb-6' />

                <ItemList setShowNewTodo={setShowNewTodo} />

            </div>
        </div>
    )
}