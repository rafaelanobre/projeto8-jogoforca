import React, { useState } from 'react';
import imagem0 from '../images/forca0.png';
import imagem1 from '../images/forca1.png';
import imagem2 from '../images/forca2.png';
import imagem3 from '../images/forca3.png';
import imagem4 from '../images/forca4.png';
import imagem5 from '../images/forca5.png';
import imagem6 from '../images/forca6.png';
import Palavras from '../palavras.js';

export default function Jogo({ contador, setContador, setHabilitarKeys }) {
    const imagens = [
        imagem0,
        imagem1,
        imagem2,
        imagem3,
        imagem4,
        imagem5,
        imagem6,
    ];

    const [palavraSorteada, setPalavraSorteada] = useState('');
    const [palavraOcultaArray, setPalavraOcultaArray] = useState([]);

    const sortearPalavra = () => {
        const palavra = Palavras[Math.floor(Math.random() * Palavras.length)];
        const palavraArray = palavra.split('');
        const palavraOcultaArray = palavraArray.map(() => '_');
    
        setContador(0);
        setHabilitarKeys(true);
        setPalavraSorteada(palavra);
        setPalavraOcultaArray(palavraOcultaArray);
    };

    return (
        <div id="top-div">
            <div id="left-game-div">
                <img src={imagens[contador]} alt="imagem da forca" />
            </div>
            <div id="right-game-div">
                <button onClick={sortearPalavra}>Escolher Palavra</button>
                <div className='game-word'>{palavraOcultaArray}</div>
            </div>
        </div>
    );
}
