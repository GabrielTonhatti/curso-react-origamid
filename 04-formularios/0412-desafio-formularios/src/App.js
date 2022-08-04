import React from "react";
import Radio from "./Form/Radio";

const perguntas = [
    {
        pergunta: "Qual método é utilizado para criar componentes?",
        options: [
            "React.makeComponent()",
            "React.createComponent()",
            "React.createElement()",
        ],
        resposta: "React.createElement()",
        id: "p1",
    },
    {
        pergunta: "Como importamos um componente externo?",
        options: [
            'import Component from "./Component"',
            'require("./Component")',
            'import "./Component"',
        ],
        resposta: 'import Component from "./Component"',
        id: "p2",
    },
    {
        pergunta: "Qual hook não é nativo?",
        options: ["useEffect()", "useFetch()", "useCallback()"],
        resposta: "useFetch()",
        id: "p3",
    },
    {
        pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
        options: ["set", "get", "use"],
        resposta: "use",
        id: "p4",
    },
];
const App = () => {
    const [index, setIndex] = React.useState(0);
    const [resposta, setResposta] = React.useState("");
    const [qtdeRespostasCorretas, setQtdeRespostasCorretas] = React.useState(0);

    function handleSubmit(event) {
        event.preventDefault();

        if (resposta === perguntas[index].resposta) {
            setQtdeRespostasCorretas(qtdeRespostasCorretas + 1);
        }

        setIndex(index + 1);
        console.log(index);
    }

    return (
        <>
            {index < perguntas.length ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <h2>{perguntas[index].pergunta}</h2>
                        <Radio
                            options={perguntas[index].options}
                            value={resposta}
                            setValue={setResposta}
                        />
                        <button>Próxima</button>
                    </form>
                </div>
            ) : (
                <p>
                    Você acertou: {qtdeRespostasCorretas} de {perguntas.length}
                </p>
            )}
        </>
    );
};

export default App;
