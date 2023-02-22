import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../../services/firebase";

const SuggestedProfile = ({
  suggestedDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) => {
  const [followed, setFollowed] = useState(false);

  const handleFollowUser = async () => {
    setFollowed(true);
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUserFollowers(suggestedDocId, userId, false);
  };

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-start w-full">
        <img
          src={`/images/avatars/${username}.jpg`}
          alt=""
          className="rounded-full h-8 w-8 flex mr-3"
        />
        <Link className="mr-auto" to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
        <button
          className="text-xs font-bold text-blue-medium"
          type="button"
          onClick={handleFollowUser}
        >
          Follow
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SuggestedProfile;
