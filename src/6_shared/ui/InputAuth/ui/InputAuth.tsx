import React, {ChangeEvent} from "react";

interface IInputAuth {
    titleInput: string
    name: string
    placeholder: string
    type: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    errorValidation: boolean
}

export const InputAuth: React.FC<IInputAuth> = ({titleInput, placeholder, name, type, handleChange, errorValidation}) => {
    return (
        <div className={"InputAuth"}>
            <label htmlFor={name}>{titleInput}</label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                name={name}
                className={errorValidation ? 'error' : ''}
            />
        </div>
    )
}