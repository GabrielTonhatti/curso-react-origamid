import React from "react";

const Input = ({ id, label, setValue, onChange, ...props }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                name={id}
                onChange={onChange}
                {...props}
            />
        </>
    );
};

export default Input;
