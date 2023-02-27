import { Route, useNavigate } from "react-router-dom";

import * as ROUTES from "../constants/routes";

import React, { useState, useEffect } from "react";

const ProtectedRoute = ({ user, children }) => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    navigate(ROUTES.LOGIN);
  }, [redirect, navigate]);

  return (
    <>
      {(() => {
        if (user) {
          return children;
        }
        if (!user) {
          setRedirect((redirect) => !redirect);
        }
        return <>what</>;
      })()}
    </>
  );
};

export default ProtectedRoute;
