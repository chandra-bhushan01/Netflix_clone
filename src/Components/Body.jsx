import { useEffect } from 'react';
import Browse from './Browse';
import Login from './Login';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import{auth} from "../Utils/Firebase"
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/UserSlice';


const Body = () => {
    const dispatch = useDispatch();
  

    

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login></Login>

        }, 
        {
            path:'/browse',
            element: <Browse></Browse>
        }

    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => { 
          if (user) {
          
            const {uid,email,displayName,photoURL} = user;
            dispatch(
              addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
              }));
           

            
            
        } else {
            // User is signed out
            dispatch(removeUser());
           

            
          }
        });

    },[])



  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body