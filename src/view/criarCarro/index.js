import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../../services/api";
import "./index.css"

// Código responsável por exibir o formulário de cadastro de um novo carro e salvar o json na api
export default function CriarCarro() {
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [age, setAge] = useState('');
  const [estado, setEstado] = useState(false);

  function salvar(e) {
    e.preventDefault();
    api
      .post("/", {
        title: title,
        brand: brand,
        price: price,
        age: age
      })
      .then((response) => {
        console.log(response.data);
        setEstado(true)
      })
      .catch((error) => {
        console.log(error);
      })
  }


  return (

    <div className="App">

      {estado === true ? (<Navigate push to="/" />) : null}

      <div className="form__post">

        <label>Título</label>
        <input id="title" name="title" value={title} onChange={(evt) => setTitle(evt.target.value)} />
        <label>Marca</label>
        <input id="brand" name="brand" value={brand} onChange={(evt) => setBrand(evt.target.value)} />
        <label>Preço</label>
        <input id="price" name="price" value={price} onChange={(evt) => setPrice(evt.target.value)} />
        <label>Ano</label>
        <input id="age" name="age" value={age} onChange={(evt) => setAge(evt.target.value)} />
        <button onClick={salvar}>CRIAR</button>

      </div>
    </div>
  );
}