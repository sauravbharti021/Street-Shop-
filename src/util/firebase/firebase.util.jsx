import { initializeApp } from 'firebase/app';
import { getAuth, 
  signInWithRedirect, signInWithPopup,  GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut , onAuthStateChanged
} from 'firebase/auth'


import {
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB9FgZC5kZzDE_o_aYpmXkeQcRIBaXdPuo",
    authDomain: "crown-clothing-c1675.firebaseapp.com",
    projectId: "crown-clothing-c1675",
    storageBucket: "crown-clothing-c1675.appspot.com",
    messagingSenderId: "366291064892",
    appId: "1:366291064892:web:dc1bbb658d2aad26070b39"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const GoogleProvider =new GoogleAuthProvider();

  GoogleProvider.setCustomParameters({
    prompt : "select_account "
  });

  export const auth= getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider); 

//   export const signInWithGoogleRedirect = () => signInWithRedirect(auth ,GoogleProvider); 

  export const db= getFirestore();

  export const createUserDocumentFromAuth = async(userAuth, additionalInformation= {} ) =>{
        if(!userAuth) return;
      
        const userDocRef= doc( db, 'users', userAuth.uid);

        

        const userSnapshot = await getDoc(userDocRef);

        
        console.log(userSnapshot.exists())

        if(!userSnapshot.exists()){
            const {displayName, email} = userAuth;
            const createdAt =new Date();

            try{
                await setDoc( userDocRef, {
                    displayName,
                    email,
                    createdAt,

                    ...additionalInformation,
                } )
            }catch(error){
                    console.log("Error while creating user", error.message );
            } 

        }

        return userDocRef;
  }  


  export const createAuthUserWithEmailAndPassword = async( email, password) =>{
    if(!email || !password) return;
     return  await createUserWithEmailAndPassword(auth, email, password);
  }

  export const SignInAuthUserWithEmailAndPassword = async( email, password) =>{
    if(!email || !password) return;
     return  await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser =async ()=>await signOut(auth);

  export const onAuthStateChangedListener =( callback)=> onAuthStateChanged(auth, callback);