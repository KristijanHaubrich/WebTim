import {
    initializeApp
} from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDn4kFF0e1txRHHpTFeoIykl1KAjAFb4oU",
    authDomain: "web-projekt-23839.firebaseapp.com",
    projectId: "web-projekt-23839",
    storageBucket: "web-projekt-23839.appspot.com",
    messagingSenderId: "427082171194",
    appId: "1:427082171194:web:bfa6ca0f821eca9406c603"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err){
        console.error(err);
        alert(err.message);
    }
}

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
  };