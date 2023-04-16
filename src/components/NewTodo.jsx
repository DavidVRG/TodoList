import React, { useState } from 'react'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase/firebase'
import { toast } from 'react-toastify'

export default function NewTodo({ setShowNewTodo }) {

    const [text, setText] = useState("")

    function uploadNewTodo(event) {
        event.preventDefault()
        addDoc(collection(db, "todos"), {
            text: text,
            createdAt: serverTimestamp()
        })
            .then(() => {
                setShowNewTodo(false)
                setText("")
                toast.success("Todo create success!")
            })
            .catch((error) => {
                toast.error("Something wrong")
            })
    }

    return (
        <div className='w-full h-full flex items-center justify-center text-white'>
            <div className="w-96 h-52 bg-[#1d3557] p-4 rounded-md shadow-sm">

                <div className='flex items-center justify-between mb-6'>
                    <h2 className='text-2xl font-medium tracking-wide'>
                        Add new Todo
                    </h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"
                        onClick={() => setShowNewTodo(false)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <form onSubmit={uploadNewTodo}>

                    <input
                        placeholder='New Todo'
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        className='w-full py-3 px-4 bg-[#f1faee] rounded-md shadow-sm placeholder-gray-800 focus:outline-none text-gray-800' />

                    <button
                        type="submit"
                        className='w-full p-2 bg-red-500 hover:bg-red-600 transition duration-200 ease-in-out mt-4 rounded-md shadow-sm'>
                        Add new Todo
                    </button>

                </form>

            </div>
        </div>
    )
}
