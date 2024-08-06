import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Calculadora from "../pages/Calculadora";
import Notefounder from "../pages/Notefounder";

const router = createBrowserRouter ([
    {
    path: "/",
    element: <App/>,
    children: [
            {
            path: "/",
            element: <Home/>
            },
            {
            path: "*",
            element: <Notefounder/>
            },
            {
            path: "/calculadora",
            element: <Calculadora/>
            },
        ],
    },
])

export default router;