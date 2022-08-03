import React from "react";
import Input from "./Input";

const Form = () => {
    const [form, setForm] = React.useState({
        nome: "",
        email: "",
        senha: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
    });
    const [response, setResponse] = React.useState(null);

    function handleChange({ target }) {
        const { id, value } = target;
        console.log(id, value);

        setForm({ ...form, [id]: value });
        console.log(form);
    }

    async function handleBlur({ target }) {
        const responseCep = await fetch(
            `https://viacep.com.br/ws/${form.cep}/json/`
        );
        const { logradouro, bairro, localidade, uf } = await responseCep.json();

        setForm({
            ...form,
            cep: target.value,
            rua: logradouro,
            bairro,
            cidade: localidade,
            estado: uf,
        });
        console.log(form);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        // Faça um fetch (POST) para a API abaixo
        // Para a criação ser aceita é necessário enviar dodos de:
        // nome, email, senha, cep, rua, numero, bairro, cidade e estado

        // Essa é a função utilizado para realizar o POST
        const resposta = await fetch(
            "https://ranekapi.origamid.dev/json/api/usuario",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // form é o objeto com os dados do formulário
                body: JSON.stringify(form),
            }
        );
        const json = await resposta.json();
        console.log(resposta);

        // Mostre uma mensagem na tela, caso a resposta da API seja positiva
        setResponse(
            resposta.status > 400 ? json.message : "Formulário enviado!"
        );
        setForm({
            nome: "",
            email: "",
            senha: "",
            cep: "",
            rua: "",
            numero: "",
            bairro: "",
            cidade: "",
            estado: "",
        });
        console.log(event);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                id="nome"
                inputName="Nome"
                type="text"
                campo={form.nome}
                onChange={handleChange}
            />
            <Input
                id="email"
                inputName="Email"
                type="email"
                campo={form.email}
                onChange={handleChange}
            />
            <Input
                id="senha"
                inputName="Senha"
                type="password"
                campo={form.senha}
                onChange={handleChange}
            />
            <Input
                id="cep"
                inputName="Cep"
                type="number"
                campo={form.cep}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <Input
                id="rua"
                inputName="Rua"
                type="text"
                campo={form.rua}
                onChange={handleChange}
            />
            <Input
                id="numero"
                inputName="Número"
                type="number"
                campo={form.numero}
                onChange={handleChange}
            />
            <Input
                id="bairro"
                inputName="Bairro"
                type="text"
                campo={form.bairro}
                onChange={handleChange}
            />
            <Input
                id="cidade"
                inputName="Cidade"
                type="text"
                campo={form.cidade}
                onChange={handleChange}
            />
            <Input
                id="estado"
                inputName="Estado"
                type="text"
                campo={form.estado}
                onChange={handleChange}
            />
            {response}
            <br />
            <button>Enviar</button>
        </form>
    );
};

export default Form;
