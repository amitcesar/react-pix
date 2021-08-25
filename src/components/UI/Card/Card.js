
import React from "react";
import './Card.css';

export const Card = () => {
	return (
		   <div className="cards">
        <button className="produto" onClick={console.log('boooo')}>
          <p className="nomeProduto">Teclado RGB Multilaser</p>
          <img className="imagemProduto" src="https://i.imgur.com/D6t0Y5k.png"/>
          <p className="valorProduto">R$ 350,00</p>
        </button>
        <button className="produto">
          <p className="nomeProduto">Teclado RGB Multilaser</p>
          <img className="imagemProduto" src="https://i.imgur.com/D6t0Y5k.png" />
          <p className="valorProduto">R$ 350,00 </p>
        </button>
     
      </div>
		)
}