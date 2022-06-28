import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from 'components/home'
import Register from 'components/register'
import Login from 'components/login'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Navigate to="/home"/>} />
              <Route exact path="/home">
                <Route index element={<Home />}/>
              </Route>
              <Route exact path="/register">
                <Route index element={<Register />}/>
              </Route>
              <Route exact path="/login">
                <Route index element={<Login />}/>
              </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router