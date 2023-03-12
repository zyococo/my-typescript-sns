import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiBoxO1r5iTUefcYVpT7xcTSc6XmVpzaY",
  authDomain: "my-discord-f6afa.firebaseapp.com",
  projectId: "my-discord-f6afa",
  storageBucket: "my-discord-f6afa.appspot.com",
  messagingSenderId: "223332337970",
  appId: "1:223332337970:web:8f99c4b27afc71ef82ef2b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
// export default db;
