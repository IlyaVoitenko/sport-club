import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LoadingPage from "../../pages/LoadingPage";

const Layout = () => {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
