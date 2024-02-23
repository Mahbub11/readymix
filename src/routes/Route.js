import { Suspense, lazy } from "react";
import { Navigate, Routes, useRoutes } from "react-router-dom";
import LoadingScreen from "../Components/LoadingScreen";
import Page404 from "../pages/ErrorPage/Page404";
import HomeLayout from "../layouts/HomeLayout";
import SectionLayout from "../layouts/SectionLayout";

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
        element: <SectionLayout></SectionLayout>,
        children: [
          { path: "", element: <Homepage></Homepage> },
          { path: "input/casting", element: <InputPage></InputPage> },
          { path: "listing", element: <ShowData></ShowData> },
          { path: "company", element: <Company></Company> },
          { path: "project", element: <Project></Project> },
          { path: "invoice-list", element: <InvoiceList></InvoiceList> },
          { path: "contract-analysis", element: <ContractAnalysis></ContractAnalysis> },
          
          
  
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
      const Company = Loadable(
        lazy(() => import("../pages/Company/CompanyPage"))
      );
      const Project = Loadable(
        lazy(() => import("../pages/Company/ProjectPage"))
      );
      const InvoiceList = Loadable(
        lazy(() => import("../pages/Invoice/InvoiceList"))
      );
      const ContractAnalysis = Loadable(
        lazy(() => import("../pages/Contract/ContractAnalysis"))
      );