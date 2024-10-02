import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyANg9lhmeATmoGUD14B2BMh8RrGRNiKUWU",
    authDomain: "create-avatar-ai.firebaseapp.com",
    projectId: "create-avatar-ai",
    storageBucket: "create-avatar-ai.appspot.com",
    messagingSenderId: "533160589472",
    appId: "1:533160589472:web:51d8429e570a0976b5f1c5",
    measurementId: "G-SPCQXC21M2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
