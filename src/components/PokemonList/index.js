import React from "react";
import { Grid } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";
import "./styles.css";

const PokemonList = ({ pokemons = [] }) => {
  return (
    <div className="wrapper">
      <Grid>
        {pokemons.map((pokemon, index) => {
          return <PokemonCard key={`pokemon-${index}`} pokemon={pokemon} />;
        })}
      </Grid>
    </div>
  );
};

export default PokemonList;
