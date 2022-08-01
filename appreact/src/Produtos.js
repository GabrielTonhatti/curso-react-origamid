import React from "react";
import Produto from "./Produto";
import Titulo from "./Titulo";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const Produtos = (props) => {
    const produtos = [
        { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
        { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
    ];

    return (
        <section>
            <Titulo texto="Produtos" />

            {produtos.map((produto) => (
                <Produto key={produto.nome} {...produto} />
            ))}
            {/* {produtos.map((produto) => (
                <div style={props.estilo}>
                    <p key={produto.nome}>{produto.nome}</p>
                    {produto.propriedades.map((propriedade) => (
                        <ul>
                            <li key={propriedade}>{propriedade}</li>
                        </ul>
                    ))}
                </div>
            ))} */}
        </section>
    );
};

export default Produtos;
