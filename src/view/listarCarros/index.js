import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carro from "../../components/carro";
import api from "../../services/api";
import './index.css'

// Código responsável pela aba inicial, onde é mostrado todos os carros cadastrados na api e onde também é possível
// Pesquisar pelo título, marca, preço ou ano do carro
export default function ListarCarros() {
  const [cars, setCars] = useState([]);
  const [query, setQuery] = useState("");
  // Constante que vai auxiliar na busca pelo carro
  const [termo] = useState(["title", "brand", "price", "age"]);

  useEffect(() => {

    api
      .get("/", {

      })
      .then((response) => {
        setCars(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  // Função que realiza a busca
  function search(items) {
    return items.filter((item) => {
      return termo.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(query.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <div className="container">
      <h1>BUSQUE AQUI</h1>

      <div className="container__search">
        <input type="search" placeholder="pesquisar..." id="search" name="search" value={query} onChange={(evt) => setQuery(evt.target.value)} />
      </div>

      <Link className="criar" to="/criar">Adicionar Carro</Link>
      <div className="cards">
        {search(cars).map((car, index) => <Carro key={index} id={car._id} titulo={car.title} brand={car.brand} preco={car.price} ano={car.age} v={car.__v} />)}
      </div>
    </div>
  );
}