import React from "react";
import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestions";

const Sidebar = () => {
  const { user } = useUser();
  let fullName, username, userId, following, docId;
  if (user.length > 0) {
    ({ docId, fullName, username, userId, following } = user[0]);
  }


  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
};

export default Sidebar;
