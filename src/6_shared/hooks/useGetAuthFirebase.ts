import {getAuth} from "firebase/auth";
import app from "../firebase";

export const useGetAuthFirebase = () => {
    return getAuth(app)
}