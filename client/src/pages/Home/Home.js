import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";
import Pokemon from "../../components/Pokemon/Pokemon";
import FilterType from "../../components/FilterType/FilterType";
import Filtered from "../../components/Filtered/Filtered";

import { getPokemons } from "../../redux/actions/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.onePokemon);
  const pokemonsType = useSelector((state) => state.pokemonsType);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {pokemon && <Pokemon />}
      <FilterType />
      {pokemonsType.length > 0 ? <Filtered /> : <Pagination />}
    </>
  );
}
