import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./view/Layout";
import OptionsPage from "./view/OptionsPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <>Not Found!</>,
        children: [
            {
                path: "issues/:issue_id",
                element: <OptionsPage />,
            },
        ],
    },
]);
const App = () => {
    return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
