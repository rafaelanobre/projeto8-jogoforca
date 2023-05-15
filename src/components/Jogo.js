import React, { useState } from 'react';
import imagem0 from '../images/forca0.png';
import imagem1 from '../images/forca1.png';
import imagem2 from '../images/forca2.png';
import imagem3 from '../images/forca3.png';
import imagem4 from '../images/forca4.png';
import imagem5 from '../images/forca5.png';
import imagem6 from '../images/forca6.png';
import Palavras from '../palavras.js';

export default function Jogo({ contador, setContador, habilitarKeys, setHabilitarKeys, letrasSelecionadas, setLetrasSelecionadas, palavraSorteada, setPalavraSorteada }) {
    const imagens = [
        imagem0,
        imagem1,
        imagem2,
        imagem3,
        imagem4,
        imagem5,
        imagem6,
    ];

    const sortearPalavra = () => {
        const palavra = Palavras[Math.floor(Math.random() * Palavras.length)];
        const palavraArray = palavra.split('');

        setContador(0);
        setHabilitarKeys(true);
        setPalavraSorteada(palavraArray);
        setLetrasSelecionadas([]);
    };

    const verificarPalavraCompleta = () => {
        return palavraSorteada.every((letra) => letrasSelecionadas.includes(letra.toLowerCase()));
    };

    return (
        <div id="top-div">
            <div id="left-game-div">
                <img src={imagens[contador]} alt="imagem da forca" />
            </div>
            <div id="right-game-div">
                <button onClick={sortearPalavra}>Escolher Palavra</button>
                <div className="game-word">
                    {palavraSorteada.map((letra, index) => (
                        <span
                            key={index}
                            style={{
                                color:
                                    verificarPalavraCompleta() || contador >= 6
                                        ? contador >= 6 ? 'red' : 'green'
                                        : letrasSelecionadas.includes(letra.toLowerCase())
                                            ? 'black'
                                            : 'black',
                            }}
                        >
                            {letrasSelecionadas.includes(letra.toLowerCase()) || contador >= 6 ? letra : '_'}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
