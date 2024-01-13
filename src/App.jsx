import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cart from "./components/Cart"
import Product from './components/Product'
import Nav from "./Nav"
import "./global.css"
const App = () => {
  return (
    <div>
        <Router>
          <Nav/>
          <Routes>
              <Route path='/cart' element={<Cart/>} />
              <Route path='/product' element={<Product/>} />
          </Routes>
        </Router>
    </div>
  )
}

export default App