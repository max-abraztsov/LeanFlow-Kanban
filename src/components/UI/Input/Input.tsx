import React, {FC, ChangeEvent} from 'react';
import "./Input.scss"

interface InputProps{
    placeholder: string;
    value: string;
    getValue: (e: string) => void;
}

const Input: FC<InputProps> = ({placeholder, getValue, value}) => {
    
    return (
        <div className="input__container">
            <input type="text" value={value} maxLength={40} onChange={(e: ChangeEvent<HTMLInputElement>) => getValue(e.target.value)} className="input" placeholder={placeholder} />
            <div className="highlight"></div>
        </div>
    );
};

export default Input;