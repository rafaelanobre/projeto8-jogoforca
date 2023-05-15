import React, { useState } from 'react';
import Jogo from "./Jogo.js"
import Letras from "./Letras.js"

import '../Styles/reset.css';
import '../Styles/style.css';

export default function Tela() {
    const [contador, setContador] = useState(0);
    const [habilitarKeys, setHabilitarKeys] = useState(false);
    const [palavraSorteada, setPalavraSorteada] = useState([]);
    const [letrasSelecionadas, setLetrasSelecionadas] = useState([]);
    const [jogoGanho, setJogoGanho] = useState(false);

    return (
        <div>
            <Jogo contador={contador} setContador={setContador} habilitarKeys={habilitarKeys} setHabilitarKeys={setHabilitarKeys} letrasSelecionadas={letrasSelecionadas} setLetrasSelecionadas={setLetrasSelecionadas} palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada} />
            <Letras contador={contador} setContador={setContador} habilitarKeys={habilitarKeys} setHabilitarKeys={setHabilitarKeys} letrasSelecionadas={letrasSelecionadas} setLetrasSelecionadas={setLetrasSelecionadas} palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada} jogoGanho={jogoGanho} setJogoGanho={setJogoGanho} />
        </div>
    );
}
