import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitialProfile {
    displayName: string | null
    displayEmail: string | null,
    displayId: string | null,
    displayProfileImage: string
}

const initialState: IInitialProfile = {
    displayName: null,
    displayProfileImage: '/images/profile/profile-skeleton.png',
    displayEmail: null,
    displayId: null
}

export const profileSlice = createSlice({
    name: 'profile-slice',
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<IInitialProfile>) => {
            if(!action.payload.displayProfileImage){
                state.displayProfileImage = '/images/profile/profile-skeleton.png'
            } else {
                state.displayProfileImage = action.payload.displayProfileImage
            }
            state.displayId = action.payload.displayId
            state.displayEmail = action.payload.displayEmail
            state.displayName = action.payload.displayName
        },
        changeAboutProfile: (state, action: PayloadAction<{name: string, image: string}>) => {
            state.displayProfileImage = action.payload.image
            state.displayName = action.payload.name
        }
    }
})
export const {setProfile, changeAboutProfile} = profileSlice.actions
export default profileSlice.reducer