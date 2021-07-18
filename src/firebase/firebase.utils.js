import firebase from 'firebase/app';

import 'firebase/firebase-firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD5wBUQhN0Ai05LeLNTQR1ENMydZqxQSjg",
    authDomain: "crown-db-438e5.firebaseapp.com",
    projectId: "crown-db-438e5",
    storageBucket: "crown-db-438e5.appspot.com",
    messagingSenderId: "872052516200",
    appId: "1:872052516200:web:22b4f1b389a1e4bb6fe2dd",
    measurementId: "G-WXEQLX173L"
};


export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
   
   
   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if(!snapShot.exists){
       const {displayName, email} = userAuth;
       const createdAt = new Date();

       try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
       }catch(error){
            console.log('error creating user', error.message);
       }
   }
   return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
