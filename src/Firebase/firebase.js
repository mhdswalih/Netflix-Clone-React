
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF2LyymkcnaVwMMY175v9GktrTCuyD8jg",
  authDomain: "netflix-clone-17855.firebaseapp.com",
  projectId: "netflix-clone-17855",
  storageBucket: "netflix-clone-17855.firebasestorage.app",
  messagingSenderId: "352342623635",
  appId: "1:352342623635:web:e56931789302343a4a1466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)


const signUp = async(name,email,password) =>{
    try {
        const respons = await createUserWithEmailAndPassword(auth,email,password)
        const user = respons.user
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:'local',
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error)
        
    }
}

const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
        
    } catch (error) {
        console.log(error);
        alert(error)
        
    }
}

const logOut = async()=>{
    signOut(auth)
}

export {auth,db,login,signUp,logOut}