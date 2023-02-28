import React, { useEffect } from "react";
import Header from "../components/header";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found - Instagram";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="ax-auth max-w-screen-lg">
        <p className="text-center text-2xl">404 Not Found!</p>
      </div>
    </div>
  );
};

export default NotFound;
