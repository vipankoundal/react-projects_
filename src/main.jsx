import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BgColor from "./components/BgColor";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PasswordGenerator from "./components/PasswordGenerator.jsx";
/*
function CreateApp() {
  return <h1>Create App</h1>;
}*/

//const anotherElement = (<p>Hello React</p>);
/*
const createEle = React.createElement(
  'p',
  {},
  'Create Element'
)
  */
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/bg-color", element: <BgColor /> },
  { path: "/pass-genie", element: <PasswordGenerator /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
