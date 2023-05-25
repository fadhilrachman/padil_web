import React from "react";
import dashboardIcon from "../assets/dashboardIcon.svg";
import expenseLogo from "../assets/expenseLogo.svg";
import incomeLogo from "../assets/incomeLogo.svg";
import logoutIcon from "../assets/logoutIcon.svg";
import { Link, useLocation } from "react-router-dom";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/reducers";
import { logout } from "../redux/AuthSlice";
import { useNavigate } from "react-router-dom";
interface List {
  path: string;
  name: string;
  icon?: string;
}
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const listSidebar: List[] = [
    {
      name: "Dashboard",
      icon: dashboardIcon,
      path: "/dashboard",
    },
    {
      name: "Income",
      icon: incomeLogo,
      path: "/income",
    },
    {
      name: "Expense",
      icon: expenseLogo,
      path: "/expense",
    },
  ];
  console.log(process.env.REACT_APP_API);

  const handleLogout = async () => {
    await dispatch(logout());
    await localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="h-screen bg-white bg-gradient-to-b from-violet-500 to-[#5A57FF] fixed  w-max text-white py-10 pl-16 px-10 rounded-r-3xl">
      <span className="text-2xl font-bold"> Dashboard</span>
      <div className="mt-20">
        <ul>
          {listSidebar.map((val) => {
            return (
              <Link to={val.path}>
                <li
                  className={`my-8 flex items-center hover:cursor-pointer font-bold ${
                    location.pathname.split("-")[0] === val.path
                      ? "text-white"
                      : "text-[#CCCCCC]"
                  }  hover:text-white`}
                >
                  <img src={val?.icon} alt="" className="mr-5 text-white " />
                  <span>{val.name}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="mt-64">
        <ul>
          <li
            className="my-8 flex items-center hover:cursor-pointer font-bold "
            onClick={handleLogout}
          >
            <img src={logoutIcon} alt="" className="mr-5 " />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
