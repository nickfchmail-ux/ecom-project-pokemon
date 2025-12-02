import Cart from "@/features/cart/Cart";
import "@/styles/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Product from "./features/productCard/Product";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import { PostsProvider } from "./state/global/contexts/PostsContext";
import Contact from "./ui/Contact";
import Error from "./ui/Error";

import { Toaster } from "react-hot-toast";
import Table from "./ui/Table";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/product",
          element: <Product />,

          errorElement: <Error />,
        },
        { path: "/product/:item", element: <ProductDetail /> },
        { path: "/cart", element: <Cart /> },
        {
          path: "/table",
          element: <Table setEditingID={null} isEditSession={false} />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <PostsProvider>
        <RouterProvider router={router} />
      </PostsProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "red",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
