import {toast} from "react-toastify";

export const TOAST_ERROR = (toastText?: string) => toast.error(toastText, {
    autoClose: 3000,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light"
})

export const TOAST_SUCCESS = (toastText?: string) => toast.success(toastText, {
    autoClose: 3000,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light"
})

export const TOAST_INFO = (toastText?: string) => toast.info(toastText, {
    autoClose: 3000,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light"
})

export const TOAST_WARNING = (toastText?: string) => toast.warning(toastText, {
    autoClose: 3000,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light"
})