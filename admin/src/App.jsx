import React from 'react'
import Navbar from './components/NavBar/Navbar'
import SideBar from './components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
// import pages from './pages/Add/Add'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';



const App = () => {

  const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr/>
      <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path='/add' element={<Add url={url}/>} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/orders' element={<Orders url={url}/>} />

        </Routes>
      </div>
      {/* 4.37.31 */}
    </div>
  )
}

export default App
