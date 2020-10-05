import React from 'react';
import './Pokecard.css';

const Pokecard = ({ pokemon }) => {
    return (
        <div className="Pokecard">
            <h3 className="Pokecard-header">{pokemon.name}</h3>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={`${pokemon.name} pokemon`}
                className="Pokecard-img"
            />
            <p>Type: {pokemon.type}</p>
            <p>EXP: {pokemon.base_experience}</p>
        </div>
    );
};

export default Pokecard;
