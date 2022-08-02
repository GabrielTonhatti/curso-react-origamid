import React from "react";
import { GlobalStorage } from "./GlobalContext";
import Produto from "./Produto";
import Limpar from "./Limpar";

function App() {
    return (
        <GlobalStorage>
            <Produto />
            <Limpar />
        </GlobalStorage>
    );
}

export default App;
