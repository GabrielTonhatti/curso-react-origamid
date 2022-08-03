import React from "react";

function App() {
    const [form, setForm] = React.useState({
        nome: "",
        email: "",
    });

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    }

    function handleChange({ target }) {
        const { id, value } = target;
        console.log(id, value);

        setForm({ ...form, [id]: value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input
                id="nome"
                type="text"
                value={form.nome}
                onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
            />
            <button>Enviar</button>
        </form>
    );
}

export default App;
