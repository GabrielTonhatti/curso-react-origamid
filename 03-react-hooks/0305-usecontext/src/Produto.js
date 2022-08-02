import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
    const global = React.useContext(GlobalContext);

    return (
        <div>
            <button onClick={() => global.buscarProdutos()}>
                Buscar Produtos
            </button>
            <button
                style={{ margin: ".5rem" }}
                onClick={() => global.limparDados()}
            >
                Limpar Produtos
            </button>
            {global.produtos &&
                global.produtos.map((produto) => (
                    <div>
                        <p>Nome: {produto.nome}</p>
                        <p>Preço: R$ {produto.preco}</p>
                        {produto.fotos.map((foto) => (
                            <img src={foto.src} alt={foto.titulo} />
                        ))}
                    </div>
                ))}
        </div>
    );
};

export default Produto;
