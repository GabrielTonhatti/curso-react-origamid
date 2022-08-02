import React from "react";
import Produto from "./Produto";

const App = () => {
    const [produto, setProduto] = React.useState(null);

    React.useEffect(() => {
        const produtoLocal = localStorage.getItem("produto");

        if (produtoLocal !== null) setProduto(produtoLocal);

        console.log(produtoLocal);
    }, []);

    React.useEffect(() => {
        if (produto !== null) localStorage.setItem("produto", produto);

        console.log(produto);
    }, [produto]);

    async function handleClick({ target }) {
        setProduto(target.innerText);
    }

    return (
        <div>
            <h1>Preferência: {produto}</h1>
            <button style={{ margin: "1rem" }} onClick={handleClick}>
                notebook
            </button>
            <button style={{ margin: "1rem" }} onClick={handleClick}>
                smartphone
            </button>
            <Produto produto={produto} />
        </div>
    );
};

export default App;
