import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Cart from './pages/cart/Cart'
import NoPage from './pages/nopage/NoPage'
import Order from './pages/order/Order'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/admin' element={<Dashboard />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/order' element={<Order />} />
        <Route exact path='*' element={<NoPage />} />
      </Routes>
    </Router>
  )
}

export default App
