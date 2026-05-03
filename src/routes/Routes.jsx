import { createBrowserRouter } from "react-router";
import Home from "../component/Home";
import root from "../component/roots/Root";
import Error from "../component/error/error";
import tmp from "../component/Tmp/tmp";
import Stats from "../component/stats/Stats";
import details from "../component/details/details";
import { friends } from "../component/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: root,
    children: [
      {index: true,Component: Home},
      {path:"tm",Component:tmp},
      {path:"st",Component:Stats},
      {path: "friends/:id",Component:details}
      
      

    ],
    errorElement : <Error/>,
    

  },
]);