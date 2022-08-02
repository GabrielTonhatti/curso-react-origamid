import React from "react";

export const GlobalContext = React.createContext();

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global
export const GlobalStorage = ({ children }) => {
    const [dados, setDados] = React.useState(null);

    React.useEffect(() => {
        fetch("https://ranekapi.origamid.dev/json/api/produto/")
            .then((response) => response.json())
            .then((data) => setDados(data));
    }, []);

    const limparDados = () => setDados(null);

    return (
        <GlobalContext.Provider value={{ dados, limparDados }}>
            {children}
        </GlobalContext.Provider>
    );
};
