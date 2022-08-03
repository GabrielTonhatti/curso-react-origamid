import React from "react";

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const App = () => {
    const [cores, setCores] = React.useState(["vermelho"]);

    function handleChange({ target }) {
        if (target.checked) {
            setCores([...cores, target.value]);
        } else {
            setCores(cores.filter((core) => core !== target.value));
        }
    }

    function handleChecked(cor) {
        return cores.includes(cor);
    }

    return (
        <form>
            {coresArray.map((cor) => (
                <label key={cor}>
                    <input
                        type="checkbox"
                        value={cor}
                        checked={handleChecked(cor)}
                        onChange={handleChange}
                    />
                    {cor}
                </label>
            ))}
            <ul>
                {cores.map((cor) => (
                    <li key={cor}>{cor}</li>
                ))}
            </ul>
        </form>
    );
};

export default App;
