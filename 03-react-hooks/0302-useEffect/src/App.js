import React from "react";
import Produto from "./Produto";

const App = () => {
    const [dados, setDados] = React.useState(null);
    const [preferencia, setPreferencia] = React.useState(null);

    async function handleClick(text) {
        const response = await fetch(
            `https://ranekapi.origamid.dev/json/api/produto/${text}`
        );

        localStorage.setItem("produto", text);
        const json = await response.json();
        setDados(json);
        setPreferencia(text);
    }

    React.useEffect(() => {
        const preferenciaStorage = localStorage.getItem("produto");

        if (preferenciaStorage) {
            handleClick(preferenciaStorage);
        }

        console.log(preferenciaStorage);
    }, []);

    return (
        <div>
            <h1>Preferência: {preferencia}</h1>
            <button
                style={{ margin: ".5rem" }}
                onClick={(event) => handleClick(event.target.innerText)}
            >
                notebook
            </button>
            <button
                style={{ margin: ".5rem" }}
                onClick={(event) => handleClick(event.target.innerText)}
            >
                smartphone
            </button>
            {dados && <Produto dados={dados} />}
        </div>
    );
};

export default App;
