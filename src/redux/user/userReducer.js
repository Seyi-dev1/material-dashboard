import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, getCurrentUser } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createUserProfileDocument } from "../../firebase/firebase.utils";
import { getDoc } from "firebase/firestore";

export const signUp = createAsyncThunk(
    'user/signup',
   async  (payload)=>{
    let response
        try {
        const query = await createUserWithEmailAndPassword(auth, payload.email, payload.password)
        const Response =  query.user
        console.log(Response)
        const document = await createUserProfileDocument(Response, payload)
        const snapShot = await getDoc(document)
        response = snapShot.data()
        }
         catch (error) {
            const errorMessage = error.message;
            response = errorMessage
        }
        return response
    }
)

export const googleSignin = createAsyncThunk(
    'user/googleSignin',
    async ()=>{
        let response
        //  const createUserDocument = async (userAuth)=>{
        //     if(!userAuth) return
        
        //             const userRef = doc(db, "users", `${userAuth.uid}`)
        //             const snapShot = await getDoc(userRef)
        //             if(!snapShot.exists()){
        //                 const { email, displayName, uid } = userAuth
        //                 const createdAt = new Date()
        //                 try {
        //                     await setDoc(userRef, {
        //                         email,
        //                         firstName:displayName,
        //                         createdAt,
        //                         id:uid
        //                     })
        //                 } 
        //                 catch (error) {
        //                     console.log(error.message)
        //                 }
        //             }
                
        //     return userRef
        // }
        try {
            const provider = new GoogleAuthProvider()
            const query = await signInWithPopup(auth, provider)
            const Response = query.user
            console.log(Response)
            const document = await  createUserProfileDocument(Response)
            const snapShot = await getDoc(document)
            response = snapShot.data()

            
        } 
        catch (error) {
            const errorMessage = error.message
            response = errorMessage
        }
        return response
    }
)

export const signIn = createAsyncThunk(
    'user/signin',
    async (payload)=>{
        let response 
        try {
            const query = await signInWithEmailAndPassword(auth, payload.email, payload.password)
            const Response =  query.user
            console.log(Response)
            const document = await createUserProfileDocument(Response, payload)
            const snapShot = await getDoc(document)
            response = snapShot.data()
        } 
        catch (error) {
            const errorMessage = error.message
            response = errorMessage
        }
        return response
    }
)

export const checkUserSession = createAsyncThunk(
    'user/checkUserSession',
    async ()=>{

        const user = await getCurrentUser()
        console.log(user)
        const userRef = await createUserProfileDocument(user)
        const snapShot = await getDoc(userRef)
        const response = snapShot.data()
        return response
    }
        
                     
                
    
)

const userSlice = createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        isSigningIn:false,
        errorMessage:''
    },
    reducers:{
        updateCurrentUser:(state, action)=>{
            state.isSigningIn = false
            state.currentUser = action.payload
        }
    },
    extraReducers:{
        [signUp.pending]:(state)=>{
            state.isSigningIn = true
        },
        [signUp.fulfilled]:(state, action)=>{
           if(typeof action.payload === 'string'){
            state.errorMessage = action.payload
           }
           else{
            state.currentUser = action.payload
           }
            state.isSigningIn = false
        },
        [signIn.pending]:(state)=>{
            state.isSigningIn = true
        },
        [signIn.fulfilled]:(state, action)=>{
            if(typeof action.payload === 'string'){
                state.errorMessage = action.payload
               }
               else{
                state.currentUser = action.payload
               }
                state.isSigningIn = false
        },
        [googleSignin.pending]:(state)=>{
            state.isSigningIn = true
        },
        [googleSignin.fulfilled]:(state, action)=>{
            if(typeof action.payload === 'string'){
                state.errorMessage = action.payload
               }
               else{
                state.currentUser = action.payload
               }
                state.isSigningIn = false
        },
        [checkUserSession.pending]:(state)=>{
            state.isSigningIn = true
        },
        [checkUserSession.fulfilled]:(state, action)=>{
            if(typeof action.payload === 'string'){
                state.errorMessage = action.payload
               }
               else{
                state.currentUser = action.payload
               }
                state.isSigningIn = false
        },
        [checkUserSession.rejected]:(state)=>{
            state.currentUser = null
            state.isSigningIn = false
        }
    }
})

export const { updateCurrentUser } = userSlice.actions

export default userSlice.reducer