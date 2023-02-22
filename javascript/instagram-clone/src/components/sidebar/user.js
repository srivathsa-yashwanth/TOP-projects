import React, { memo } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import PropTypes from "prop-types";
import "react-loading-skeleton/dist/skeleton.css";


const User = ({ username, fullName }) => {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/p/${username}`}
      className="grid grid-cols-4 gap-4 mb-6 items-center"
    >
      <div className="flex items-center justify-between col-span-1">
        <img
          src={`images/avatars/${username}.jpg`}
          className="rounded-full w-8 h-8 flex mr-3"
          alt="profile"
        />
        </div>
        <div className="col-span-3">
          <p className="font-bold text-sm">{username}</p>
          <p className="text-sm">{fullName}</p>
        </div>
    </Link>
  );
};

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};

User.whyDidYouRender = true;

export default User;
