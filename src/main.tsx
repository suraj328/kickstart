import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./assets/css/chakra/theme.ts";
import "./assets/css/tailwind/tailwind.css";
import { Provider } from "react-redux";
import { store } from "./extra/redux/store/store.ts";
import { RouterProvider } from "react-router";
import router from "./routes.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
