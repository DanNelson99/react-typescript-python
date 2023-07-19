import {
  RouterProvider,
} from "react-router-dom";

//Custom
import router from "./core/routes/routes";

import './App.css'

const App = () => {
  return (
      <>
        <RouterProvider router={router} />
      </>
  )
}

export default App
