import {
  createBrowserRouter,
} from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import FindTutor from "../pages/FindTutor/FindTutor";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddFood from "../pages/AddFood/AddFood";

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
        Component: FindTutor
      },
      {
        path: '/addFood',
        Component: AddFood
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