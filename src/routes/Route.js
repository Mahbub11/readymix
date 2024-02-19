import { Suspense, lazy } from "react";
import { Navigate, Routes, useRoutes } from "react-router-dom";
import LoadingScreen from "../Components/LoadingScreen";
import Page404 from "../pages/ErrorPage/Page404";
import HomeLayout from "../layouts/HomeLayout";

const Loadable = (Component) => (props) => {
    return (
      <Suspense fallback={<LoadingScreen></LoadingScreen>}>
        <Component {...props} />
      </Suspense>
    );
  };

  export default function Router() {
    return useRoutes([
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
          { path: "dashboard", element: <Homepage></Homepage> },
          { path: "input/casting", element: <InputPage></InputPage> },
          { path: "listing", element: <ShowData></ShowData> },
          
  
          { path: "404", element: <Page404></Page404> },
          { path: "*", element: <Navigate to="/404" replace /> },
        ],
      },])}


      // Lazy load page
      const Homepage = Loadable(
        lazy(() => import("../pages/Home/Homepage"))
      );
      const InputPage = Loadable(
        lazy(() => import("../pages/Input/InputPage"))
      );
      const ShowData = Loadable(
        lazy(() => import("../pages/Data/ShowData"))
      );