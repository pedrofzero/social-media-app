import React, { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/landing';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/home';

const Router = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route path='/' element={
            <LandingPage />} 
          />

          <Route path='/home' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} 
          />
          
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}


export default Router