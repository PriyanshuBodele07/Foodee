import React from 'react'
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contactus from './components/Contactus'; 
import Error from './components/Error';
import {createBrowserRouter, Outlet} from "react-router-dom"
import resList from './utils/mockData';

const App = () => {
  return(
    <div>
      <Header/>
      <Outlet/>
      

    </div>
  );
};

const appRouter =createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },

      {
      path: "/about",
      element: <About/>,
      },
      {
      path: "/contact",
      element: <Contactus/>,
      }
      ],
      errorElement: <Error/>,
  },
  
]);




export { appRouter };

export default App