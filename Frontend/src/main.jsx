
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Provider} from "react-redux"
import { store } from './store.js';
import Login from './features/login/Login.jsx';
import Register from './features/login/Register.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Login></Login>
            },
            {
                path:"register",
                element: <Register></Register>
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
