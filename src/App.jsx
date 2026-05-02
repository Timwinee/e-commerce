import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Orders,
  Products,
  SingleProduct,
  Login,
  Register,
} from "./pages";

import {ErrorElement} from './components'
import {loader as landingLoader} from './pages/Landing'
import {loader as singleProductsLoader} from './pages/singleProduct'
import {loader as productsLoader} from './pages/products'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      hydrateFallbackElement: <div>Yuklanmoqda...</div>,
      children: [
        {
          index: true,
          element: <Landing />,
          loader:landingLoader,
        },
        {
          path:'/products',
          element:<Products/>,
          errorElement:<Error/>,
          loader:productsLoader
        },
        {
          path:'products/:id',
          element:<SingleProduct/>,
          errorElement:<ErrorElement/>,
          loader:singleProductsLoader
        },
        {
          path:'cart',
          element:<Cart/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/checkout',
          element:<Checkout/>
        },
        {
          path:'/orders',
          element:<Orders/>
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
