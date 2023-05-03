import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import {  getDoc, doc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCSQX96hSfkCKOIa09H06wwt9d0hfilJ6U",
    authDomain: "materioo-dashboard.firebaseapp.com",
    projectId: "materioo-dashboard",
    storageBucket: "materioo-dashboard.appspot.com",
    messagingSenderId: "688063765764",
    appId: "1:688063765764:web:3baf4f2bbdc94a1c414451",
    measurementId: "G-QZBDWQFZ10"
  };

  const app = initializeApp(firebaseConfig)
  export const auth = getAuth()
  export const db = getFirestore(app)
  const provider = new GoogleAuthProvider()

  export const googleHandler =  () => {
    signInWithPopup(auth, provider)
}

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return


           
            const userRef = doc(db,"users",`${userAuth.uid}`)
            const snapShot = await getDoc(userRef)


            if(!snapShot.exists() && additionalData!== undefined){
                const { firstName, lastName } = additionalData
                const { email, uid } = userAuth
                const createdAt = new Date()
                
                try {
                    await setDoc(userRef, {
                        email,
                        firstName,
                        lastName,
                        createdAt,
                        id:uid
                    })
                } 
                catch (error) {
                    console.log(error.message)
                }
            }

            else if(!snapShot.exists() && additionalData === undefined){
                const { email, uid, displayName } = userAuth
                const createdAt = new Date()

                try {
                    await setDoc(userRef, {
                        email,
                        firstName:displayName,
                        createdAt,
                        id:uid
                    })
                } 
                catch (error) {
                    console.log(error.message)
                }
            }
        return userRef
    
}

export const getCurrentUser = async () => {
    return new Promise((resolve, reject)=>{
     const unsubcribe = auth.onAuthStateChanged(userAuth => {
         unsubcribe()
         resolve(userAuth)
     }, reject)
    })
 }