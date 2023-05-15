import React from 'react';
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras({ contador, habilitarKeys, letrasSelecionadas, palavraSorteada, setLetrasSelecionadas, setContador }) {

    const verificarPalavraCompleta = () => {
        return palavraSorteada.every((letra) => letrasSelecionadas.includes(letra.toLowerCase()));
    };

    const handleClick = (letra) => {
        if (habilitarKeys && !letrasSelecionadas.includes(letra)) {
            setLetrasSelecionadas([...letrasSelecionadas, letra]);
            if (!palavraSorteada.includes(letra)) {
                setContador(contador + 1);
            }
        }
    };

    const teclasDesabilitadas = contador >= 6 || verificarPalavraCompleta();

    return (
        <div id="keyboard-container">
            <div id="keyboard">
                {alfabeto.map(letra => (
                    <button
                        disabled={teclasDesabilitadas || letrasSelecionadas.includes(letra)}
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
