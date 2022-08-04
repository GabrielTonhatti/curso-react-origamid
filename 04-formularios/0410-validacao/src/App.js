import React from "react";
import Input from "./Form/Input";

const App = () => {
    const [cep, setCep] = React.useState("");
    const [error, setError] = React.useState(null);

    function validateCep(value) {
        const regex = /^\d{5}-?\d{3}$/;

        if (value.length === 0) {
            setError("Preencha um valor");
            return false;
        } else if (!regex.test(value)) {
            setError("Preencha um CEP válido");
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function handleBlur({ target }) {
        validateCep(target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (validateCep(cep)) {
            console.log("Enviou");
        } else {
            console.log("Não enviou");
        }
    }

    function handleChange({ target }) {
        if (error) validateCep(target.value);
        setCep(target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                id="cep"
                label="CEP"
                type="text"
                value={cep}
                setValue={setCep}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="00000-000"
            />
            {error && <p>{error}</p>}
            <button>Enviar</button>
        </form>
    );
};

export default App;
