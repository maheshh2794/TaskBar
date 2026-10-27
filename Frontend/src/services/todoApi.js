
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath: 'todosApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/todos'
    }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ({
                url: '/',
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "token": window.localStorage.getItem("token")
                }
            }),
        }),

        addTodo: builder.mutation({
            query: (newTodo) => ({
                url: '/addtodo',
                method: 'POST',
                body: JSON.stringify(newTodo),
                headers: {
                    "Content-Type": "application/json",
                    "token": window.localStorage.getItem("token")
                }
            }),
        }),

        updateTodo: builder.mutation({
            query: ({ id, status }) => ({
                url: '/updatetodo',
                method: "PATCH",
                body: { id, status },
                headers: {
                    "Content-Type": "application/json",
                    "token": window.localStorage.getItem("token")
                }
            }),
        }),

        deleteTodo: builder.mutation({
            query: (id) => ({
                url: '/deletetodo',
                method: 'DELETE',
                body: JSON.stringify({ id: id }),
                headers: {
                    "Content-Type": "application/json",
                    "token": window.localStorage.getItem("token")
                }
            }),
        }),
    }),
})

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useDeleteTodoMutation,
    useUpdateTodoMutation,
    useLazyGetTodosQuery
} = todosApi
