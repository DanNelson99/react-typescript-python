/**
 * Following a remix pattern so I can make this more enterprise like
 */
import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import Root from "../root/Root";
const Settings = lazy(() => import("../../settings/Settings"));
const About = lazy(() => import("../../about/About"));
const Home = lazy(() => import("../../home/Home"));
const Mapper = lazy(() => import("../../mapper/Mapper"));

import Error from "../error/Error";
import Fallback from "./fallback/FallBack";
import NotFound from "../notFound/NotFound";

import GET from "./api/get";

import { routes } from "../types/globalTypes";

const router = createBrowserRouter([
  {
    path: routes.BASE,
    element: <Root />,
    loader: async () => GET({ requestUrl: "/workspaces" }),
    children: [
      {
        path: routes.HOME,
        errorElement: <Error />,
        element: (
          <Suspense fallback={<Fallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: routes.MAPPER,
        errorElement: <Error />,
        element: (
          <Suspense fallback={<Fallback />}>
            <Mapper />
          </Suspense>
        )
      },
      {
        path: routes.ABOUT,
        errorElement: <Error />,
        element: (
          <Suspense fallback={<Fallback />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: routes.SETTINGS,
        errorElement: <Error />,
        element: (
          <Suspense fallback={<Fallback />}>
            <Settings />
          </Suspense>
        )
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Fallback />}>
            <NotFound />
          </Suspense>
        )
      }
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Fallback />}>
        <NotFound />
      </Suspense>
    )
  }
]);

export default router;