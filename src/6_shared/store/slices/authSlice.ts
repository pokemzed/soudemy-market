import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserInfo} from "@firebase/auth-types"

interface IAuthSlice {
    isAuth: boolean
    userUid: string
    userInfo: UserInfo | null
    userLogout: boolean
}
interface ILoginUser {
    isAuth: boolean,
    userUId: string,
    userInfo: UserInfo
}

const initialState: IAuthSlice = {
    isAuth: false,
    userUid: '',
    userInfo: null,
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
            state.userInfo = null
            //Меняем чекер на true - чтобы проходила проверка на auth state от firebase
            state.userLogout = true
        }
    }
})
export const {loginUser, logoutUser} = authSlice.actions
export default authSlice.reducer