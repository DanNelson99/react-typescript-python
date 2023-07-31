import {
  RouterProvider,
} from 'react-router-dom';

//Custom
import { GlobalStateProvider } from './core/globalState/globalState.tsx';
import router from './core/routes/routes';

const App = () => {
  return (
    <>
      <GlobalStateProvider>
        <RouterProvider router={router} />
      </GlobalStateProvider>
    </>
  )
}

export default App
