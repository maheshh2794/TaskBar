import React, { useState } from 'react'
import {
    useAddTodoMutation,
    useDeleteTodoMutation,
    useGetTodosQuery,
    useLazyGetTodosQuery,
    useUpdateTodoMutation
} from '../../services/todoApi'

import './todos.css'
import { useSelector } from 'react-redux'

function Todos() {

    const name = useSelector((state) => state.user.name)


    const [addtodo, setAddtodo] = useState({ todo: '' })

    const { data, isLoading } = useGetTodosQuery()
    const [lazyFn] = useLazyGetTodosQuery()

    const [addTodo] = useAddTodoMutation()
    const [delTodo] = useDeleteTodoMutation()
    const [updateTodo] = useUpdateTodoMutation()

    return (
        <div className="todos-container">
            <h1>Hello, {name}</h1>

            <div className="add-todo">
                <input
                    type="text"
                    placeholder="Enter a new task..."
                    value={addtodo.todo}
                    onChange={(e) =>
                        setAddtodo({ ...addtodo, todo: e.target.value })
                    }
                />

                <button
                    className="add-btn"
                    onClick={() =>
                        addTodo(addtodo).then(() => lazyFn())
                    }
                >
                    Add Task
                </button>
            </div>

            {isLoading ? (
                <p>Loading todos...</p>
            ) : (
                <div>
                    {data?.map((a) => (
                        <div className="todo-item" key={a._id}>
                            <div>
                                <b>{a.todo}</b>
                            </div>

                            <div>
                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        delTodo(a._id).then(() => lazyFn())
                                    }
                                >
                                    Delete
                                </button>

                                {a.status === 'completed' ?
                                    <button className="done-btn" onClick={() =>
                                        updateTodo({ id: a._id, status: "pending" }).then(() => lazyFn())
                                    }
                                    >
                                        Undo
                                    </button>
                                    :
                                    <button
                                        className="complete-btn"
                                        onClick={() =>
                                            updateTodo({ id: a._id, status: "completed" }).then(() => lazyFn())
                                        }
                                    >
                                        Done
                                    </button>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Todos