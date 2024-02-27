import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IAuthSlice {
    isAuth: boolean
    userUid: string
    userInfo: any
    userLogout: boolean
}
interface ILoginUser {
    isAuth: boolean,
    userUId: string,
    userInfo: any
}

const initialState: IAuthSlice = {
    isAuth: false,
    userUid: '',
    userInfo: {},
    userLogout: true
}

export const authSlice = createSlice({
    name: 'auth-slice',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<ILoginUser>) => {
            state.isAuth = true
            state.userUid = action.payload.userUId
            state.userInfo = action.payload.userInfo
            //Меняем чекер на false - чтобы проходила проверка на auth state от firebase
            state.userLogout = false
        },
        logoutUser: (state) => {
            state.isAuth = false
            state.userUid = ''
            state.userInfo = ''
            //Меняем чекер на true - чтобы проходила проверка на auth state от firebase
            state.userLogout = true
        }
    }
})
export const {loginUser, logoutUser} = authSlice.actions
export default authSlice.reducer