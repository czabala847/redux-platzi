import React from "react";
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import "./styles.css";

import { getPokemonsWithDetail } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "../../components/Loader";

function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.pokemon.list);
  const loading = useSelector((state) => state.ui.loading);

  React.useEffect(() => {
    dispatch(getPokemonsWithDetail());
  }, []);

  return (
    <div className="Home">
      {loading && <Loader />}
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
