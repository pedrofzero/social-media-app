import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const Router = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<h1>Hello</h1>} />
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}


export default Router