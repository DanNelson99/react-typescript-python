/**
 * Following a remix pattern so I can make this more enterprise like
 */
import { Suspense } from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import Root from "../root/Root";
import Settings from "../../settings/Settings";
import About from "../../about/About";
import Home from "../../home/Home";
import Mapper from "../../mapper/Mapper";

import Error from "../error/Error";
import Fallback from "./fallback/FallBack";
import NotFound from "../notFound/NotFound";

import GET from "./api/get";

import { routes } from "../types/globalTypes";

const router = createBrowserRouter([
  {
    path: routes.BASE,
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: routes.HOME,
        errorElement: <Error />,
        element: (
          <Suspense fallback={<Fallback />}>
            <Home />
          </Suspense>
        ),
        loader: async () => GET({ requestUrl: "/" })
      },
      {
        path: routes.MAPPER,
        element: (
          <Suspense fallback={<Fallback />}>
            <Mapper />
          </Suspense>
        )
      },
      {
        path: routes.ABOUT,
        element: (
          <Suspense fallback={<Fallback />}>
            <About />
          </Suspense>
        )
      },
      {
        path: routes.SETTINGS,
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