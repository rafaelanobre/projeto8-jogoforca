import React, { useState } from 'react';
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras({ contador, setContador, palavraSorteada, habilitarKeys }) {
    const [letrasSelecionadas, setLetrasSelecionadas] = useState([]);

    const handleClick = (letra) => {
        if (!letrasSelecionadas.includes(letra)) {
            setLetrasSelecionadas([...letrasSelecionadas, letra]);
            if (!palavraSorteada.includes(letra)) {
                setContador(contador + 1);
            }
        }
    };

    return (
        <div id="keyboard-container">
            <div id="keyboard">
                {alfabeto.map(letra => (
                    <button
                        disabled={!habilitarKeys || letrasSelecionadas.includes(letra)}
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
