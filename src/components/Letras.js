import React, { useState } from 'react';
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras({ contador, setContador, habilitarKeys, setHabilitarKeys, letrasSelecionadas, setLetrasSelecionadas, palavraSorteada, setPalavraSorteada, jogoGanho, setJogoGanho }) {

        const verificarPalavraCompleta = () => {
            let jogoGanho = true;
            palavraSorteada.forEach((letra) => {
            if (!letrasSelecionadas.includes(letra)) {
                jogoGanho = false;
            }
            });
            return jogoGanho;
        };
        
        const handleClick = (letra) => {
            if (habilitarKeys && !letrasSelecionadas.includes(letra)) {
            setLetrasSelecionadas([...letrasSelecionadas, letra]);
            if (!palavraSorteada.includes(letra)) {
                setContador(contador + 1);
                if (contador + 1 >= 6) {
                setJogoGanho(false);
                setHabilitarKeys(false);
                }
            }
            if (verificarPalavraCompleta()) {
                setJogoGanho(true);
                setHabilitarKeys(false);
            }
            }
        };
        


    return (
        <div id="keyboard-container">
            <div id="keyboard">
                {alfabeto.map(letra => (
                    <button 
                        disabled={!habilitarKeys || letrasSelecionadas.includes(letra) }
                        className="key"
                        key={letra}
                        onClick={() => handleClick(letra)}
                    >
                        {letra.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
}
