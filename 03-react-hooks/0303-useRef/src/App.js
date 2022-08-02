import React from "react";

const App = () => {
    const [carrinho, setCarrinho] = React.useState(0);
    const [notificacao, setNotificacao] = React.useState(null);
    const timeoutRef = React.useRef();

    function handleClick() {
        setCarrinho(carrinho + 1);
        setNotificacao("Item adicionado ao carrinho");

        clearTimeout(timeoutRef.current);
        console.log(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setNotificacao(null);
            console.log("teste");
        }, 2000);

        console.log(timeoutRef.current);
    }

    return (
        <div>
            <p>{notificacao}</p>
            <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
        </div>
    );
};

export default App;
