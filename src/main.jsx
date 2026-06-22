import { RouterProvider } from "react-router";
import CartProvider from "./context/CartContext";
import router from "./routes/Router";

<CartProvider>
  <RouterProvider router={router} />
</CartProvider>;
