import s from "./Create.module.scss";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon } from "../../redux/actions/actions";
import { NavLink, useNavigate } from "react-router-dom";
import { getTypes,updatePokemons } from "../../redux/actions/actions";

export default function Create() {
  const redir = useNavigate()
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [type, setType] = useState();
  const [data, setData] = useState({
    name: "",
    attack: "",
    defense: "",
    hp: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  });

  function onSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(data));
    dispatch(updatePokemons(data))
    redir('/home')
  }

  function onClickType(e) {
    e.preventDefault();
    e.target.setAttribute("disabled", true);
    setType({
      ...type,
      [e.target.name]: e.target.value,
    });
  }

  function onHandle(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    var arr = []
    for (const key in type) {
      arr.push(key)
    }
    setData({
      ...data,
      types: arr,
    });
  }, [type]);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <>
      <form onSubmit={onSubmit} method="POST" className={s.form}>
        <label>
          Name:
          <input
            value={data.name}
            onChange={onHandle}
            type="text"
            name="name"
          />
        </label>
        <label>
          Attack:
          <input
            value={data.attack}
            onChange={onHandle}
            type="number"
            name="attack"
          />
        </label>
        <label>
          Defense:
          <input
            value={data.defense}
            onChange={onHandle}
            type="number"
            name="defense"
          />
        </label>
        <label>
          Hp:
          <input value={data.hp} onChange={onHandle} type="number" name="hp" />
        </label>
        <label>
          Speed:
          <input
            value={data.speed}
            onChange={onHandle}
            type="number"
            name="speed"
          />
        </label>
        <label>
          Height:
          <input
            value={data.height}
            onChange={onHandle}
            type="number"
            name="height"
          />
        </label>
        <label>
          Weight:
          <input
            value={data.weight}
            onChange={onHandle}
            type="number"
            name="weight"
          />
        </label>
        <label>Types:</label>

        <div >
          {types[0]?.map((type) => {
            return (
              <button onClick={onClickType}  name={type} value={type} >
                {type}
              </button>
            );
          })}
        </div>
        {/* <label>
          Image:
          <input value={data.image} onChange={onHandle} type="file" name="image" alt="image" />
        </label> */}
        <input type="submit" value="Submit" />
      </form>
      <NavLink to="/home">Volver</NavLink>
    </>
  );
}
