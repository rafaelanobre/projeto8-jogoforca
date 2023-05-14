import React, { useState } from 'react';
import Jogo from "./Jogo.js"
import Letras from "./Letras.js"
import Palavras from '../palavras.js';

import '../Styles/reset.css';
import '../Styles/style.css';

export default function Tela(){
    const [contador, setContador] = useState(0);
    return (
        <div>
            <Jogo contador={contador} setContador={setContador} />
            <Letras contador={contador} setContador={setContador} />
        </div>
    );
}