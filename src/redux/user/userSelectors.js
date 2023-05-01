import { createSelector } from "@reduxjs/toolkit"

const selectUser = (state)=> state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    user=>user.currentUser
)

const selectError = (state)=> state.user

export const selectErrorMessage = createSelector(
    [selectError],
    user=>user.errorMessage
)