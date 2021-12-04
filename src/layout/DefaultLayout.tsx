import React from "react";
import { AppHeader, AppContent, AppSidebar, AppFooter } from "../components";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
