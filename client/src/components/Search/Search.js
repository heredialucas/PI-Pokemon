import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions/actions";

import s from './Search.module.scss'

export default function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    if(name === '') return alert('Debe ingresar un Pokemon')
    dispatch(getPokemonByName(name));
    setName('')
  }

  function onHandle(e) {
    setName(e.target.value);
  }

  return (
    <>
      <form className={s.container}>
        <input type="text" placeholder="Pokemon" onChange={onHandle} value={name} name="search" />
        <button onClick={onSubmit}>Search</button>
      </form>
    </>
  );
}
