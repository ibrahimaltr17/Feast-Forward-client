import {
  createBrowserRouter,
} from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddFood from "../pages/AddFood/AddFood";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import DetailsFood from "../pages/DetailsFood/DetailsFood";
import axios from "axios";
import MyFood from "../pages/MyFood/MyFood";
import RequestedFood from "../pages/RequestedFood/RequestedFood";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/availableFood',
        Component: AvailableFoods
      },
      {
        path: '/addFood',
        element: <PrivateRoute>
          <AddFood></AddFood>
        </PrivateRoute>
      },
      {
        path: '/myFood',
        element: <PrivateRoute>
          <MyFood></MyFood>
        </PrivateRoute>
      },
      {
        path: '/details/:foodId',
        Component: DetailsFood,
        loader: async ({ params }) => {
          const res = await axios.get(`https://server-feast-forward.vercel.app/details/${params.foodId}`)
          return res.data
        }
      },
      {
        path: '/myRequestedFoods',
        element: <PrivateRoute>
          <RequestedFood></RequestedFood>
        </PrivateRoute>
      },
      {
        path: '/updateFood/:foodId',
        Component: UpdateFood,
        loader: async ({ params }) => {
          const res = await axios.get(`https://server-feast-forward.vercel.app/updateFood/${params.foodId}`);
          return res.data;
        }
      }
    ]
  },
  {
    path: "signup",
    Component: Register
  },
  {
    path: "login",
    Component: Login
  }
]);

export default router;