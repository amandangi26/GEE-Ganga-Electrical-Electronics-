import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import GEELandingPage from './components/Home'
import Products from './components/Products'
import Layout from './Layout.jsx'
import Login from './components/Login.jsx'
import AllProducts from './components/AllProducts.jsx'
import VerifyData from './components/VerifyData.jsx'
import AdminPanel from './components/AdminPanel.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    {/* ////childs */}
  <Route path='' element={<GEELandingPage/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/products' element={<AllProducts/>}/>
  <Route path='/verify' element={<VerifyData/>}/>
  <Route path='/admin' element={<AdminPanel/>}/>
  </Route>
   ///we can put more routes

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
