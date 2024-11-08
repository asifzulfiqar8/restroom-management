import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="h-[calc(100vh-170px)] overflow-y-scroll custom-scroll bg-white rounded-[14px]">
      <Outlet />
    </main>
  );
};

export default Main;
