import React, { Suspense } from "react";
import Layout from "../components/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import listRoutes from "./listRoutes";
import AuthRoutes from "./AuthRoutes";
import { getToken } from "../utils";
const RoutesPage = () => {
  const token = getToken();
  console.log({ token });

  return (
    <>
      <Suspense fallback={<></>}>
        {token ? (
          <Layout>
            <Routes>
              {listRoutes.map((val, key) => (
                <Route path={val.path} key={key} />
              ))}
            </Routes>
          </Layout>
        ) : (
          <>
            <Navigate to="/login" />
            <AuthRoutes />
          </>
        )}
      </Suspense>
    </>
  );
};

export default RoutesPage;
