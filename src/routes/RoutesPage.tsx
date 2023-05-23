import React, { Suspense } from "react";
import Layout from "../components/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import listRoutes from "./listRoutes";
import AuthRoutes from "./AuthRoutes";
import { getToken } from "../utils";
import Playground from "../pages/Playground";
const RoutesPage = () => {
  const token = getToken();

  return (
    <div className="font-index">
      <Suspense fallback={<>caisdoasdo</>}>
        {token ? (
          <Layout>
            <Routes>
              {listRoutes.map((val, key) => (
                <Route path={val.path} key={key} element={val.component} />
              ))}
            </Routes>
          </Layout>
        ) : (
          <>
            {/* <Navigate to="/login" /> */}
            <AuthRoutes />
          </>
        )}
        <Routes>
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default RoutesPage;
