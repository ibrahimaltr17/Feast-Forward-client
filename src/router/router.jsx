import {
  createBrowserRouter,
} from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import FindTutor from "../pages/FindTutor/FindTutor";

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
        path: '/findTutors',
        Component: FindTutor
      }
    ]
  },
]);

export default router;