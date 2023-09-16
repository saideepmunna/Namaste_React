import React from "react";
import ReactDOM from "react-dom/client";
import ResContainer from "./components/ResContainer";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import  {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "/",
        element: <ResContainer />, // if path is /about then load this element on the page
      },
      {
        path: "/about",
        element: <About />, // if path is /about then load this element on the page
      },
    
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  },
  
]);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(<RouterProvider router={appRouter} />);
