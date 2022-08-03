import React from "react";

const formFields = [
    {
        id: "nome",
        label: "Nome",
        type: "text",
    },
    {
        id: "email",
        label: "Email",
        type: "email",
    },
    {
        id: "senha",
        label: "Senha",
        type: "password",
    },
    {
        id: "cep",
        label: "Cep",
        type: "text",
    },
    {
        id: "rua",
        label: "Rua",
        type: "text",
    },
    {
        id: "numero",
        label: "Número",
        type: "text",
    },
    {
        id: "bairro",
        label: "Bairro",
        type: "text",
    },
    {
        id: "cidade",
        label: "Cidade",
        type: "text",
    },
    {
        id: "estado",
        label: "Estado",
        type: "text",
    },
];

const forms = formFields.reduce((acc, field) => {
    return {
        ...acc,
        [field.id]: "",
    };
}, {});

const App = () => {
    const [form, setForm] = React.useState(forms);
    const [response, setResponse] = React.useState(null);

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch("https://ranekapi.origamid.dev/json/api/usuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        }).then((resp) => setResponse(resp));

        setForm(forms);
    }

    return (
        <form onSubmit={handleSubmit}>
            {formFields.map(({ id, label, type }) => (
                <div key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input
                        id={id}
                        type={type}
                        value={form[id]}
                        onChange={handleChange}
                    />
                </div>
            ))}
            {response && response.ok && <p>Formulário Enviado</p>}
            <button>Enviar</button>
        </form>
    );
};

export default App;
