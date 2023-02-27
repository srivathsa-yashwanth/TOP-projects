import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./pages/not-found"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));

const App = () => {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path={ROUTES.LOGIN}
              element={!user ? <Login /> : <Navigate to={ROUTES.DASHBOARD} />}
            />
            <Route
              path={ROUTES.SIGNUP}
              element={!user ? <SignUp /> : <Navigate to={ROUTES.DASHBOARD} />}
            />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            <Route
              path={ROUTES.DASHBOARD}
              element={user ? <Dashboard /> : <Navigate to={ROUTES.LOGIN} />}
            />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
