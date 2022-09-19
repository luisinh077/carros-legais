import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import api from "../../services/api";

// Código responsável por pegar os valores do carro selecionado, mostrar na tela e atualizar os dados que o usuário modificar
export default function VisualizarCarro() {

    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [age, setAge] = useState(0);
    const [estado, setEstado] = useState('');
    const { id } = useParams();

    function editar(e) {
        e.preventDefault();
        api
            .put(`/${id}`, {
                _id: id,
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

    useEffect(() => {
        api
            .get(`/${id}`)
            .then((response) => {
                setTitle(response.data.title)
                setBrand(response.data.brand)
                setPrice(response.data.price)
                setAge(response.data.age)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [id]);

    return (
        <div className="form__post">

            {estado === true ? (<Navigate push to="/" />) : null}

            <label>Título</label>
            <input id="title" name="title" value={title} onChange={(evt) => setTitle(evt.target.value)} />
            <label>Marca</label>
            <input id="brand" name="brand" value={brand} onChange={(evt) => setBrand(evt.target.value)} />
            <label>Preço</label>
            <input id="price" name="price" value={price} onChange={(evt) => setPrice(evt.target.value)} />
            <label>Ano</label>
            <input id="age" name="age" value={age} onChange={(evt) => setAge(evt.target.value)} />
            <button onClick={editar}>Atualizar</button>

        </div>
    )
}