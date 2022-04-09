
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyB_iAGU48Rb1yGL0_NYmfXtgaEKlq9PhNQ",
  authDomain: "cloth-db-7c9b9.firebaseapp.com",
  projectId: "cloth-db-7c9b9",
  storageBucket: "cloth-db-7c9b9.appspot.com",
  messagingSenderId: "280392766372",
  appId: "1:280392766372:web:358757485792b7ec176731",
  measurementId: "G-9LVVQ9WYTK"
};


export const createUserProfileDocument = async(userAuth,additionalData) =>{

  if(!userAuth) return;

  
  
  const userRef = firestore.doc(`/users/${userAuth.uid}`)


  // console.log(userRef.get())
  const snapShot = await userRef.get();

  
  // console.log(snapShot)


  if(!snapShot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    
  try{

    console.log("im in try")
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  }catch(error){
    console.log("im in error")
      console.log('error', error.message)
  }
  }

return userRef

}

// Initialize Firebase
firebase.initializeApp(config);


export const auth = firebase.auth();

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;