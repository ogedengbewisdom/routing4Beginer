import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";


function App() {

  const router = createBrowserRouter([
    {path: "/", element: <Root />, errorElement:<Error />, children: [
      {index: true, element: <Home />},
      {path: "products", element: <Products />},
      {path: "products/:productId", element: <ProductDetail />}
    ]}
  ])
  return <RouterProvider router={router} />;
}

export default App;
