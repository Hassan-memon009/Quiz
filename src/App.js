import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Offering from './Component/Offering'
function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path={'/'} element={<WelcomePage />} /> */}
        <Route path={'/Offering'} element={<Offering />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
