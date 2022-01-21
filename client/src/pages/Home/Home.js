import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";

import { getPokemons } from "../../redux/actions/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state=>state.pokemons)

  useEffect(() => {
    if(pokemons.length === 0){
      dispatch(getPokemons());
    }
  }, [dispatch,pokemons]);

  return (
    <>
      <Navbar />
      <Cards />
    </>
  );
}
