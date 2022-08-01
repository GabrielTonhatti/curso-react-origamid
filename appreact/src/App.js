import React from "react";
import Home from "./Home/Home";
import Produtos from "./Produtos/Produtos";

const App = () => {
    const { pathname } = window.location;
    console.log(pathname);

    return (
        <div>
            {pathname === "/" ? (
                <Home texto="Home" cor={{ color: "green" }} />
            ) : (
                <Produtos
                    cor={{ color: "green" }}
                    texto="Produtos"
                    estilo={{
                        border: "1px solid #000",
                        marginTop: "10px",
                        padding: "10px",
                    }}
                />
            )}
        </div>
    );
};

export default App;
