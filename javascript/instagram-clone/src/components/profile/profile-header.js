import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import useUser from "../../hooks/use-user";
import { isUserFollowingProfile, toggleFollow } from "../../services/firebase";

const ProfileHeader = ({
  photosCount,
  profile: {
    docId: profileDocId,
    userId: profileUserId,
    fullName,
    following = [],
    followers = [],
    username: profileUsername,
  },
  followersCount,
  setFollowersCount,
}) => {
  let { user } = useUser();
  if (user.length > 0) user = user[0];
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);

  const activeBtnFollow = user.username && user.username !== profileUsername;

  const handleToggleFollow = async () => {
    setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
    setFollowersCount({
      followersCount: isFollowingProfile
        ? followersCount - 1
        : followersCount + 1,
    });
    await toggleFollow(
      isFollowingProfile,
      user.docId,
      profileDocId,
      profileUserId,
      user.userId
    );
  };

  const isLoggedInUserFollowingProfile = async () => {
    const isFollowing = await isUserFollowingProfile(
      user.username,
      profileUserId
    );
    setIsFollowingProfile(isFollowing);
  };

  useEffect(() => {
    if (user.username && profileUserId) {
      isLoggedInUserFollowingProfile();
    }
  }, [user, profileUserId]);

  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      <div className="container flex-justify-center">
        {user.username && (
          <img
            src={`/images/avatars/${profileUsername}.jpg`}
            className="rounded-full h-40 w-40 flex"
            alt={`${profileUsername} profile`}
          />
        )}
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          <p className="text-2xl mr-4">{profileUsername}</p>
          {activeBtnFollow && (
            <button
              className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
              type="button"
              onClick={handleToggleFollow}
            >
              {isFollowingProfile ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
        <div className="container flex mt-4">
          {followers === undefined || following === undefined ? (
            <Skeleton count={1} width={677} height={24} />
          ) : (
            <>
              <p className="mr-10">
                <span className="font-bold">{photosCount}</span>
                {` `}
                Photos
              </p>
              <p className="mr-10">
                <span className="font-bold">{followersCount}</span>
                {` `}
                {followersCount === 1 ? "follower" : "followers"}
              </p>
              <p className="mr-10">
                <span className="font-bold">{following.length}</span>
                {` `}
                following
              </p>
            </>
          )}
        </div>
        <div className="container mt-4">
          <p className="font-medium">
            {!fullName ? (
              <Skeleton count={1} width={677} height={24} />
            ) : (
              fullName
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
