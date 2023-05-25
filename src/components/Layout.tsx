import Navbar from ".//Navbar";
import Sidebar from ".//Sidebar";
import React from "react";
function Layout({ children }: { children?: React.ReactNode }) {
  const cuy: string = "padik";
  return (
    <div className="flex font-index bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-y-auto ml-56">
        <Navbar />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
