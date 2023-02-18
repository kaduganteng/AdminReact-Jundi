import {createBrowserRouter, Navigate, redirect} from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./component/DefaultLayout.jsx";
import { Children } from "react";
import GuestLayout from "./component/GuestLayout.jsx";
import Dahsboard from "./views/Dashboard.jsx";

const router = createBrowserRouter([


    {
        path : '/',
        element : <DefaultLayout />,
        children : [
            {
                path : '/',
                element : <Navigate to="/users"  />
            },
            
            {
                path : '/dashboard',
                element :<Dahsboard/>
            },

            {
                path: '/users',
                element:<Users />
            }
            
        ]
        
    },

    {
        path : '/',
        element : <GuestLayout/>,
        children : [
            {
                path: '/login',
                element:<Login />
            }, 
            {
                path: '/signup',
                element:<Signup />
            }
        ]
    },
   
    {
        path: '*',
        element:<NotFound />
    }
])
export default router