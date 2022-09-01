import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EcoBasket from '../Pages/EcoBasket'
import Home from '../Pages/Home'
import Page2 from '../Pages/Page2'
import Sample from '../Redux/Reducers/Sample'

export default function IndexRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ecobasket' element={<EcoBasket/>}/>
           
        </Routes>
    </BrowserRouter>
  )
}
