// src/routes.tsx
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PageNotFound } from "./component/global/PageNotFound";
import { App } from "./App";

const routes: RouteObject[] = [
  {
    path: "*",
    element: <PageNotFound />,
    errorElement: <>Error occured</>,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <>Error occured</>,
  },
];

const router = createBrowserRouter(routes);
export default router;
