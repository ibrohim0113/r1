import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Careers from './pages/Careers';
import CareerDetails from './pages/CareerDetails';
import Contact from './pages/Contact';

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/Careers",
          element: <Careers />
        },
        {
          path: "/CareerDetails",
          element: <CareerDetails />
        },
        {
          path: "/Contact",
          element: <Contact />
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return <div className='bg-[#030303]'>
    <RouterProvider router={router} />
  </div>
}

export default App
