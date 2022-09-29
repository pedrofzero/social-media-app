import React, { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Post from '../pages/post';

const Router = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>}
        />

        <Route path='/:user/'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />

        <Route path='/:user/:post' element={
          <ProtectedRoute>
            <Post />
          </ProtectedRoute>
        }
        />
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}


export default Router