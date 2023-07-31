/**
 * Following a remix pattern so I can make this more enterprise like
 */
import {
  createBrowserRouter,
} from 'react-router-dom';

import Root from '../root/Root';
import Settings from '../../settings/Settings';
import About from '../../about/About';
import Home from '../../home/Home';
import NotFound from '../notFound/NotFound';

import { routes } from '../types/globalTypes';

const router = createBrowserRouter([
  {
    path: routes.BASE,
    element: <Root />,
    children: [
      {
        path: routes.HOME,
        element: <Home />,
      },
      {
        path: routes.ABOUT,
        element: <About />,
      },
      {
        path: routes.SETTINGS,
        element: <Settings />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);

export default router;