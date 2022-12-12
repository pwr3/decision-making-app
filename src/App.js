import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./view/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <>Not Found...</>,
        children: [
            {
                path: '/issues/:issue-id',
                element: <>Option Page</>
            }
        ]
    }
])

const App = () => {
  return (
      <RouterProvider router={router}></RouterProvider>

  );
}

export default App;