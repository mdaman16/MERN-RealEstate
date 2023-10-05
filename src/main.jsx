import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider,Routes,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/About/ABout.jsx'
import Profile from './Components/Profile/Profile.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import Signin from './Components/Signin/Signin.jsx'
import Home from './Components/Home/Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element ={<Home/>} />
      <Route path='about' element ={<About/>} />
      <Route path='profile' element ={<Profile/>} />
      <Route path='signup' element ={<SignUp/>} />
      <Route path='signin' element ={<Signin/>} />

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
