import React from "react";

const Input = (props) => {
    const campo = props.campo;

    return (
        <>
            <label htmlFor={props.id}>{props.inputName}</label>
            <input
                id={props.id}
                type={props.type}
                value={campo}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </>
    );
};

export default Input;
