import React from 'react'
import DeleteTodo from './DeleteTodo'

export default function Item({ id, data }) {
    return (
        <div className='flex justify-between items-center'>
            <p className='font-medium'>{data.text}</p>
            <div className='flex items-center gap-2'>
                <time>{data.createdAt && new Date(data.createdAt.seconds * 1000).toDateString()}</time>
                <DeleteTodo id={id} />
            </div>
        </div>
    )
}