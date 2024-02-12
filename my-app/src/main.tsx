import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
// import App from "./App" 
import "./index.css"
import CssBaseline from '@mui/material/CssBaseline';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import {router} from "./router"



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    
    <CssBaseline />
    <Provider store={store}>
    <RouterProvider router={router} />
      
    </Provider>
  </React.StrictMode>,
)
