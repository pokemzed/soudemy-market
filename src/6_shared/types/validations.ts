export const validateEmail = (email: string) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export const validatePasswordLogin = (password: string) => {
    if(password.length <= 5){
        return false
    }
}

export const validatePasswordReg = (password: string) => {
    if(password.length <= 5){
        return false
    }
    if(password[0] !== password[0].toUpperCase()){
        return 'First letter uppercase – required!'
    }
}