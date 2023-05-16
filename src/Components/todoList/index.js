import React from 'react'
import ToDo from '../ToDo'

export default function ToDoList({filteredToDos, Move_trash, Delete, Back, check}) {
    return (

        filteredToDos.map((todo) => <ToDo id = {todo.id} active = {todo.active} text = {todo.text} done={todo.done} Move_trash={Move_trash} Delete={Delete} Back={Back} check={check}></ToDo>)
    )
}
