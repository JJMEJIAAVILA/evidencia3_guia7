import React from 'react';
import './MiComponente.css';

function MiComponente() {
    const handleClick = () => {
        alert('¡Se hizo clic en el botón!');
    };

    return (
        <div className="mi-componente">
            <h2>Este es mi primer componente</h2>
            <p>¡Estoy aprendiendo React!</p>
            <button onClick={handleClick}>Haz clic aquí</button>
        </div>
    );
}

export default MiComponente;