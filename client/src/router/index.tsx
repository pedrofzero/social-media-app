import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/landing';

const Router = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<LandingPage />} />
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}


export default Router