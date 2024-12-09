import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayouts from "../layouts/DashboardLayouts/DashboardLayouts";
import Statistics from "../pages/DashboardPages/Common/Statistics";
import AddRoom from "../pages/DashboardPages/Host/AddRoom/AddRoom";
import MyListings from "../pages/DashboardPages/Host/MyListings/MyListings";
import Profile from "../pages/DashboardPages/Common/Profile";
import ManageUsers from "../pages/DashboardPages/Admin/ManageUsers";
import AdminRoute from "./AdminRoute";
import HostRoute from "./HostRoute";
import MyBookings from "../pages/DashboardPages/Guest/MyBookings";
import ManageBookings from "../pages/DashboardPages/Host/ManageBookings";
import Career from "../pages/Career";
import Contact from "../pages/Contact";
import Gallary from "../pages/Gallary/Gallary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "career",
        element: <PrivateRoute><Career /></PrivateRoute>,
      },
      {
        path: "contact",
        element:<Contact></Contact>,
      },
      {
        path: "gallary",
        element:<Gallary></Gallary>,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },

  // Dashboard routing
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayouts></DashboardLayouts>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>          
            <Statistics></Statistics>
          </PrivateRoute>
        ),
      },

      {
        path: "add-room",
        element: (
          <PrivateRoute>       
            <HostRoute>
             <AddRoom></AddRoom>
            </HostRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "my-listings",
        element: (
          <PrivateRoute>          
            <HostRoute>
             <MyListings></MyListings>
            </HostRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "manage-bookings",
        element: (
          <PrivateRoute>
            <HostRoute>
              <ManageBookings></ManageBookings>
            </HostRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "my-bookings",
        element: (
          <PrivateRoute>
              <MyBookings></MyBookings>           
          </PrivateRoute>
        ),
      },

      {
        path: "profile",
        element: (
          <PrivateRoute>           
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
