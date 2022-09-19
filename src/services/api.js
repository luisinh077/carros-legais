import axios from "axios"; // Fazendo o import da biblioteca axios

// Criando a variável de chamada da API
const api = axios.create({
    baseURL: "http://api-test.bhut.com.br:3000/api/cars",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
});

export default api;