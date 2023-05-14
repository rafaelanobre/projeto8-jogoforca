import React, { useState } from 'react';
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras(){
    return (
        <div id="keyboard-container">
            <div id="keyboard">
                {alfabeto.map(letra => (
                    <button disabled className="key" key={letra}>{letra.toUpperCase()}</button>
                ))}
            </div>
        </div>
    );
}