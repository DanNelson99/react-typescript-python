import {
  RouterProvider,
} from "react-router-dom";
import { ReactFlowProvider } from 'reactflow';

//Custom
import { GlobalStateProvider } from "./core/globalState/globalState.tsx";
import router from "./core/routes/routes";

import 'reactflow/dist/style.css';

const App = () => {
  return (
      <ReactFlowProvider>
        <GlobalStateProvider>
          <RouterProvider router={router} />
        </GlobalStateProvider>
      </ReactFlowProvider >
  )
}

export default App
