import {ChangeEvent, FC, FormEvent, useState} from "react";
import {TOAST_ERROR} from "../../../../6_shared/constants/toasts.ts";
import {validateEmail, validatePasswordLogin} from "../../../../6_shared/types/validations.ts";
import {useNavigate} from "react-router-dom";

interface IFormState {
    email: string
    password: string
}

export const SignInForm: FC = () => {
    const isAuth = false
    const navigate = useNavigate()
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


    //submit func
    const submitForm = (e: FormEvent<EventTarget>) => {
        e.preventDefault()

        //validate
        if (!validateEmail(formData.email)) {
            setValidation({...validation, email: 'Invalid E-Mail'})
            return TOAST_ERROR('Invalid E-Mail')
        }
        if (!validatePasswordLogin(formData.password)) {
            setValidation({...validation, password: 'Invalid E-Mail'})
            return TOAST_ERROR('Invalid Password')
        }
        console.log(formData)
    }

    return (
        <form onSubmit={submitForm} className={"SignInForm"}>
            <div className={"input"}>
                <label htmlFor={'email'}>E-Mail</label>
                <input
                    onChange={changeEmail}
                    name={'email'}
                    type="text"
                    placeholder={"Enter your E-Mail"}
                />
                {validation.password && <span>{validation.password}</span>}
            </div>
            <div className={"input"}>
                <label htmlFor={'password'}>Password</label>
                <input
                    onChange={changePassword}
                    name={'password'}
                    type="password"
                    placeholder={"Enter your Password"}
                    className={validation.password ? 'error-input' : ''}
                />
                {validation.password && <span>{validation.password}</span>}
            </div>
            <button type={'submit'}>
                Submit
            </button>
        </form>
    )
}