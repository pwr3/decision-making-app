import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./view/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        // errorElement: <>Not Found......</>,
        children: [
            {
                path: 'issues/:id',
                element: <>Option Page</>
            }
        ]
    },
    {
        path: '/fu',
        element: <>FUUUU</>
    }
])
const App = () => {
    return(
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App;