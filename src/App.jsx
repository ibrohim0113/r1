import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout/Layout'
import Home from './components/Home'
import Section1 from './components/Section1'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index={true} element={<Home />}></Route>
          <Route path='/product/:id' element={<Section1/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
