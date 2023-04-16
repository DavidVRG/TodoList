import React, { useEffect, useState } from 'react'
import Item from './Item'
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import { db } from '../firebase/firebase'

export default function ItemList() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("createdAt", "desc"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todos = []
      querySnapshot.forEach((doc) => {
        todos.push({
          id: doc.id,
          data: doc.data()
        })
      })
      setTodos(todos)
      return () => unsubscribe
    })

  }, [])

  return (
    <div className='flex flex-col gap-6 h-[500px] overflow-y-scroll'>

      {todos.length !== 0 && (
        todos.map((todo) => {
          return (
            <Item key={todo.id} id={todo.id} data={todo.data} />
          )
        })
      )}

    </div>
  )
}