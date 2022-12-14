import React from "react";
import Input from "./Form/Input";
import useForm from "./Hooks/useForm";

const App = () => {
    const cep = useForm("cep");
    const email = useForm("email");
    const nome = useForm();
    const sobrenome = useForm(false);

    function handleSubmit(event) {
        event.preventDefault();

        if (cep.validate() && email.validate() && nome.validate()) {
            console.log("Enviou");
        } else {
            console.log("Não enviou");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input id="nome" label="Nome" type="text" {...nome} />
            <Input
                id="sobrenome"
                label="Sobrenome"
                type="text"
                {...sobrenome}
            />
            <Input
                id="cep"
                label="CEP"
                type="text"
                placeholder="00000-000"
                {...cep}
            />
            <Input label="Email" id="email" type="email" {...email} />
            <button>Enviar</button>
        </form>
    );
};

export default App;
