import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./view/Layout";
import OptionsPage from "./view/OptionsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        // errorElement: <>Not Found......</>,
        children: [
            {
                path: 'issues/:issue_id',
                element: <OptionsPage />
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