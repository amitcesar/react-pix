import React from "react";
import { Header } from "../Header/Header";
import "./Container.css";
export const Container = () => {
  return (
    <div className="container">
      <Header />
      <div className="cards">
        <button className="produto">
          <p className="nomeProduto">Teclado RGB Multilaser</p>
          <img className="imagemProduto" src="https://i.imgur.com/D6t0Y5k.png"></img>
          <p className="valorProduto">R$ 350,00</p>
        </button>
        <button className="produto">
          <p className="nomeProduto">Teclado RGB Multilaser</p>
          <img className="imagemProduto" src="https://i.imgur.com/D6t0Y5k.png"></img>
          <p className="valorProduto">R$ 350,00</p>
        </button>
      </div>
    </div>
  );
};
