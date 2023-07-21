/**
 * Following a remix pattern so I can make this more enterprise like
 */
import {
  createBrowserRouter,
} from "react-router-dom";

import Root from "../root/Root";
import Settings from "../../settings/Settings";
import About from "../../about/About";
import Home from "../../home/Home";
import NotFound from "../notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);

export default router;