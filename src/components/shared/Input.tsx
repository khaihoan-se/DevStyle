import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    InputFor: string;
    label: string;
    value?: any;
    name?: string;
    type: string;
    onChange?: any;
}
const Input: React.FC<InputProps> = ({ InputFor, label, value, name, type, onChange }) => {
    return (
        <div className="relative md:w-80 w-full">
            <input 
                className="input__grounp w-full h-full border-[1px] border-black rounded-md outline-none p-[10px] text-sm bg-white text-black" 
                type={type} id={InputFor}
                placeholder=" "
                value={value}
                name={name}
                onChange={onChange}
            />
            <label className="label__grounp absolute left-0 top-2 px-2 text-black text-sm bg-white" htmlFor={InputFor}>{label}</label>
        </div>
    )
}

export default React.memo(Input);