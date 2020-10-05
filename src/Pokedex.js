import React from 'react';
import pokeData from './pokeData';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ pokemonArr = pokeData }) => {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-header">Pokedex</h1>
            {pokemonArr.map((p) => (
                <Pokecard pokemon={p} />
            ))}
        </div>
    );
};

export default Pokedex;
