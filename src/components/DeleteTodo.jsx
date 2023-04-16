import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebase/firebase'
import { toast } from 'react-toastify'

export default function DeleteTodo({ id }) {

    function deleteTodo() {
        deleteDoc(doc(db, "todos", id))
            .then(() => {
                toast.success("Todo delete success!")
            })
            .catch((error) => {
                toast.error("Something wrong!")
            })
    }

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"
                onClick={deleteTodo}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    )
}