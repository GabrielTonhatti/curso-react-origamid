import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
    const array = ["Item 1", "Item 2"];

    return (
        <div>
            <Input id="email" label="Email" required />
            <Input id="password" type="password" label="Password" />
            <Button itens={array} />
        </div>
    );
};

export default Form;
