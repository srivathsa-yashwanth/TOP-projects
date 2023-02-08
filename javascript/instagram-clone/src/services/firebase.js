import { firebase, FieldValue } from "../lib/firebase";

const doesUsernameExists = async (username) => {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();


  return result.docs.map((user) => user.data().length > 0);
};

export { doesUsernameExists };
