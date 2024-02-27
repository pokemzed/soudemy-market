import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import InputAuth from "../../../../6_shared/ui/InputAuth";
import {TOAST_ERROR} from "../../../../6_shared/constants/toasts.ts";
import {validateEmail, validatePasswordReg} from "../../../../6_shared/types/validations.ts";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useGetAuthFirebase} from "../../../../6_shared/hooks/useGetAuthFirebase.ts";
import {useUserAuth} from "../../../../6_shared/hooks/useUserAuth.ts";
import {useNavigate} from "react-router-dom";

interface IFormState {
    email: string
    password: string
}

export const SignUpForm: React.FC = () => {
    const navigate = useNavigate()
    const {isAuth, loginUser} = useUserAuth()
    const auth = useGetAuthFirebase()

    useEffect(() => {
        if(isAuth){
            navigate('/profile')
        }
    }, [isAuth, navigate]);

    // state
    const [formData, setFormData] = useState<IFormState>({
        email: '',
        password: ''
    })
    const [validation, setValidation] = useState<IFormState>({
        email: '',
        password: ''
    })


    // changes func
    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            email: e.target.value
        })
        setValidation({...validation, email: ''})
    }
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            password: e.target.value
        })
        setValidation({...validation, password: ''})
    }


    // validation
    const validationAuth = () => {
        if(!validateEmail(formData.email) && !validatePasswordReg(formData.password)){
            setValidation({password: 'Некорректный пароль', email: 'Некорректная почта'})
            return 'Некорректная почта и пароль'
        }
        if (!validateEmail(formData.email)) {
            setValidation({...validation, email: 'Некорректная почта'})
            return 'Некорректная почта'
        }
        if (!validatePasswordReg(formData.password)) {
            setValidation({...validation, password: 'Некорректный пароль'})
            return 'Некорректный пароль'
        }
        return true
    }
    //submit func
    const submitForm = (e: FormEvent<EventTarget>) => {
        e.preventDefault()
        if(validationAuth() !== true){
            return TOAST_ERROR(validationAuth().toString())
        }

        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Signed up
                const user = {
                    isAuth: true,
                    userUId: userCredential.user.uid,
                    userInfo: userCredential.user.metadata
                };
                loginUser(user)
                navigate('/profile')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setValidation({email: errorMessage, password: errorMessage})
                TOAST_ERROR(errorMessage)
            });
    }

    return (
        <form onSubmit={submitForm} className={"SignInForm"}>
            <InputAuth
                titleInput={'E-Mail'}
                type={'text'}
                name={'email'}
                placeholder={'Введите ваш E-Mail'}
                handleChange={changeEmail}
                errorValidation={!!validation.email}
            />
            <InputAuth
                titleInput={'Password'}
                type={'password'}
                name={'password'}
                placeholder={'Введите ваш пароль'}
                handleChange={changePassword}
                errorValidation={!!validation.password}
            />
            <button type={'submit'}>
                Войти
            </button>
        </form>
    )
}