import React from "react";
import Head from "./Head";
import styles from "./Produtos.module.css";

const Produtos = () => {
    const [produtos, setProdutos] = React.useState([]);

    React.useEffect(() => {
        fetch("https://ranekapi.origamid.dev/json/api/produto")
            .then((response) => response.json())
            .then((json) => setProdutos(json));
    });

    return (
        <div className={styles.produto}>
            <Head title="Ranek | Produto" description="Entre em contato" />
            <h1>Produtos</h1>
        </div>
    );
};

export default Produtos;
