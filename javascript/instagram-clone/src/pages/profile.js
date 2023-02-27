import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserByUsername } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import UserProfile from "../components/profile";
import Header from "../components/header";

const Profile = () => {
  const { username } = useParams();
  const [userExists, setUserExists] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserExists = async () => {
      const user = await getUserByUsername(username);
      if (user.length > 0) {
        setUser(user[0]);
        setUserExists(true);
      } else {
        setUserExists(false);
        navigate(ROUTES.NOT_FOUND);
      }
    };
    checkUserExists();
  }, [username, navigate]);

  return userExists ? (
    <div className="bg-gray-background">
      <div className="mx-auto max-w-screen-lg">
        <Header />
        <UserProfile user={user} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Profile;
