import {ChangeEvent, FC, FormEvent, useEffect, useState} from "react";
import {TOAST_ERROR} from "../../../../6_shared/constants/toasts.ts";
import {validateEmail, validatePasswordLogin} from "../../../../6_shared/types/validations.ts";
import InputAuth from "../../../../6_shared/ui/InputAuth";
import {useGetAuthFirebase} from "../../../../6_shared/hooks/useGetAuthFirebase.ts";
import {signInWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom";
import {useUserAuth} from "../../../../6_shared/hooks/useUserAuth.ts";

interface IFormState {
    email: string
    password: string
}

export const SignInForm: FC = () => {
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
        if(!validateEmail(formData.email) && !validatePasswordLogin(formData.password)){
            setValidation({password: 'Некорректный пароль', email: 'Некорректная почта'})
            return 'Некорректная почта и пароль'
        }
        if (!validateEmail(formData.email)) {
            setValidation({...validation, email: 'Некорректная почта'})
            return 'Некорректная почта'
        }
        if (!validatePasswordLogin(formData.password)) {
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

        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Signed in
                const user = {
                    isAuth: true,
                    userUId: userCredential.user.uid,
                    userInfo: userCredential.user
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