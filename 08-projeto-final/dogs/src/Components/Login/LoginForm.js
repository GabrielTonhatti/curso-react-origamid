import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const LoginForm = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                return json;
            });
    };

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    onChange={({ target }) => setUsername(target.value)}
                />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    onChange={({ target }) => setPassword(target.value)}
                />
                <Button>Entrar</Button>
            </form>

            <Link to="/login/criar">Cadastro</Link>
        </section>
    );
};

export default LoginForm;
