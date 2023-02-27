import React, { useState, useEffect, useReducer } from "react";
import { getUserPhotos } from "../../services/firebase";
import ProfileHeader from "./profile-header";
import Photos from "./photos";

const UserProfile = ({ user }) => {

  const reducer = (state, newState) => ({ ...state, ...newState });
  const initialState = {
    profile: {},
    photosCollection: [],
    followersCount: 0,
  };

  const [{ profile, photosCollection, followersCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const getProfileInfoAndPhotos = async () => {
      const photos = await getUserPhotos(user);
      dispatch({
        profile: user,
        photosCollection: photos,
        followersCount: user.followers?.length,
      });
    };

    if (user) getProfileInfoAndPhotos();
  }, [user]);
  return (
    <div>
      <ProfileHeader
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followersCount={followersCount}
        setFollowersCount={dispatch}
      />
      <Photos photos={photosCollection} />
    </div>
  );
};

export default UserProfile;
