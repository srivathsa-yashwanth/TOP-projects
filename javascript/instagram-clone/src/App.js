import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/login"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>} > 
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
