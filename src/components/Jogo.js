import React, { useState } from 'react';
import imagem0 from '../images/forca0.png';
import imagem1 from '../images/forca1.png';
import imagem2 from '../images/forca2.png';
import imagem3 from '../images/forca3.png';
import imagem4 from '../images/forca4.png';
import imagem5 from '../images/forca5.png';
import imagem6 from '../images/forca6.png';

export default function Jogo({ contador, setContador }){
const imagens = [
    imagem0,
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    imagem6,
];

    return (
        <div id="top-div">
            <div id="left-game-div">
                <img src={imagens[contador]} alt="imagem da forca"></img>
            </div>
            <div id="right-game-div">
                <button>Escolher Palavra</button>
                <div className='game-word'>___aaa_</div>
            </div>
        </div>
    );
}