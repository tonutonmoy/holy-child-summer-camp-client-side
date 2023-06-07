import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {

        path: '/',
        element: <Home></Home>
      },
      {

        path: '/login',
        element: <Login></Login>
      },

      {

        path: '/registration',
        element: <Registration></Registration>
      }
    ]

  },
]);



export default router;
