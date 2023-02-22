import { firebase, FieldValue } from "../lib/firebase";

const doesUsernameExists = async (username) => {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
};

// get user from the firestore where userId === userId(passed from auth)
const getUserByUserId = async (userId) => {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({ ...item.data(), docId: item.id }));
  return user;
};

const getSuggestedProfiles = async (userId, following) => {
  const result = await firebase.firestore().collection("users").limit(10).get();
  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId)
    );
};

const updateLoggedInUserFollowing = async (
  loggedInUserDocId,
  profileId,
  isFollowingProfile
) => {
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
};

const updateFollowedUserFollowers = async (
  suggestedDocId,
  userId,
  isFollowingProfile
) => {
  return firebase
    .firestore()
    .collection("users")
    .doc(suggestedDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(userId)
        : FieldValue.arrayUnion(userId),
    });
};

export {
  doesUsernameExists,
  getUserByUserId,
  getSuggestedProfiles,
  updateFollowedUserFollowers,
  updateLoggedInUserFollowing,
};
