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
import PaymentPage from "../DashboardPages/PaymentPage/PaymentPage";
import PrivateRoute from "../PrivateRouts/PrivateRoute";


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
        element: <PrivateRoute>
          <MySelectedClasses></MySelectedClasses>
        </PrivateRoute>
      },

      {

        path: 'MyEnrolledClasses',
        element: <PrivateRoute>
          <MyEnrolledClasses></MyEnrolledClasses>
        </PrivateRoute>
      },

      {

        path: 'paymentHistory',
        element: <PrivateRoute>
          <PaymentHistory></PaymentHistory>
        </PrivateRoute>
      },
      {

        path: 'addAClass',
        element: <PrivateRoute>
          <AddAClass></AddAClass>
        </PrivateRoute>
      },
      {

        path: 'myClasses',
        element: <PrivateRoute>
          <MyClasses></MyClasses>
        </PrivateRoute>
      },
      {

        path: 'manageClasses',
        element: <PrivateRoute>
          <ManageClasses></ManageClasses>
        </PrivateRoute>
      },
      {

        path: 'manageUsers',
        element:<PrivateRoute>
          <ManageUser></ManageUser>
        </PrivateRoute>
      },
      {

        path: 'paymentPage/:id',
        element:
          <PaymentPage></PaymentPage>
        
      }

    ]
  }
]);



export default router;
