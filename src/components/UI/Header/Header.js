import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <div>
      <div class="main-Header">
        <h2>Lista de Produtos</h2>
        <button type="button" className="buttons">
          + Adicionar
        </button>
      </div>
    </div>
  );
};
