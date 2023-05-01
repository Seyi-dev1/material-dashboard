import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userReducer'

const combibedReducers = combineReducers({
    user:userReducer
})

const logger = createLogger()

const middleWares = []

if(process.env.NODE_ENV === 'development') {
    middleWares.push(logger)
}

 const store = configureStore({
  reducer: combibedReducers,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:{
        // ignoredActions:[FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE],
        ignoredActionPaths:['payload.createdAt','payload'],
        ignoredPaths:['user.currentUser.createdAt', 'firebase', 'firestore', 'payload', 'user.currentUser']
    }
}).concat(middleWares)
})

export default store