import { Link } from "react-router-dom";
import api from "../../services/api";

// Componente criado para editar as informações do carro ou exclusão do carro
function excluir(id) {
    api
        .delete(`/${id}`)
        .then((response) => {
            console.log(response.data);
            window.location.reload(true);
        })
        .catch((error) => {
            console.log(error);
        })
}

export default function Carro({ id, titulo, brand, preco, ano, v }) {
    return (
        <div to={`/${id}`} className="card">
            <p>Id: {id}</p>
            <p>Título: {titulo}</p>
            <p>Marca: {brand}</p>
            <p>Preço: {preco}</p>
            <p>Ano: {ano}</p>
            <Link to={`/${id}`}><i className="fa-solid fa-pencil editar" title="Editar"></i></Link>
            <i className="fa-solid fa-trash" onClick={() => (window.confirm("Tem certeza que deseja excluir?")) ? excluir(id) : null} title="Excluir"></i>
        </div>
    )
}