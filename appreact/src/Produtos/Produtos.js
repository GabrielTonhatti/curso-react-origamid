import React from "react";
import Links from "../Links/Links";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = (props) => {
    return (
        <>
            <Links />
            <h1 style={props.cor}>{props.texto}</h1>
            {produtos.map((produto) => (
                <div style={props.estilo}>
                    <p key={produto.nome}>{produto.nome}</p>
                    {produto.propriedades.map((propriedade) => (
                        <ul>
                            <li key={propriedade}>{propriedade}</li>
                        </ul>
                    ))}
                </div>
            ))}
        </>
    );
};

export default Produtos;
