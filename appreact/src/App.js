import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

const App = () => {
    const { pathname } = window.location;
    console.log(pathname);

    const Pagina = pathname === "/produtos" ? Produtos : Home;

    return (
        <div>
            <Header />
            <Pagina />
        </div>
    );
};

export default App;
