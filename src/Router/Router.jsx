import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Home from "../Pages/Home/Home";
import InstructorPage from "../Pages/InstructorPage/InstructorPage";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MySelectedClasses from "../DashboardPages/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../DashboardPages/MyEnrolledClasses/MyEnrolledClasses";
import AddAClass from "../DashboardPages/AddAClass/AddAClass";
import MyClasses from "../DashboardPages/MyClasses/MyClasses";
import ManageClasses from "../DashboardPages/ManageClasses/ManageClasses";
import ManageUser from "../DashboardPages/ManageUser/ManageUser";
import PaymentHistory from "../DashboardPages/PaymentHistory/PaymentHistory";


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
      },
      {

        path: '/instructors',
        element: <InstructorPage></InstructorPage>
      },
      {

        path: '/classes',
        element: <Classes></Classes>
      }
    ]

  },
  {
    path: 'dashBoard',
    element: <Dashboard></Dashboard>,
    children: [

      {

        path: 'mySelectedClasses',
        element: <MySelectedClasses></MySelectedClasses>
      },

      {

        path: 'MyEnrolledClasses',
        element: <MyEnrolledClasses></MyEnrolledClasses>
      },

      {

        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {

        path: 'addAClass',
        element: <AddAClass></AddAClass>
      },
      {

        path: 'myClasses',
        element: <MyClasses></MyClasses>
      },
      {

        path: 'manageClasses',
        element: <ManageClasses></ManageClasses>
      },
      {

        path: 'manageUsers',
        element:<ManageUser></ManageUser>
      }

    ]
  }
]);



export default router;
