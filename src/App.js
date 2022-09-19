/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./view/criarCarro";
import ListarCarros from "./view/listarCarros";
import EditarCarro from "./view/editarCarro";
import Header from "./components/header";

export function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<ListarCarros />} />
        <Route exact path='/:id' element={<EditarCarro />} />
        <Route exact path='/criar' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
