import { authentication, firestore, storage } from "./firebaseConnect";
import "firebase/firestore";

var usernameTaken = false;
var emailExists = false;

export var emails = [];

export async function verifyUser() {
  if (authentication.currentUser == null) {
    return false;
  } else {
    await loadCauses();
    return true;
  }
}

/*
    Function to load all currently existing users
    throught their email.
*/
export async function loadExistingEmails() {
  emails = [];
  let users = firestore.collection("users");
  let query = users
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        emails.push(doc.data().email);
      });
    })
    .catch((err) => {
      console.log("Error getting documents", err);
    });
}

/*
    Function that creates a new user (org or individual). 
*/
export async function createUser() {
  let users = firestore.collection("users");
  await authentication
    .createUserWithEmailAndPassword(global.email, global.password)
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Oops. Something went wrong.");
    })
    .then(function (user) {
      setTimeout(() => createUserData(user.user.uid), 300);
    });
}

async function createUserData(id) {
  firestore.collection("users").add({
    // set new individual
    first_name: global.first_name,
    last_name: global.last_name,
    email: global.email.toLowerCase(),
    username: global.username,
    verified: false,
    banned: false,
  });
}
