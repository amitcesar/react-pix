import React from "react";
import { Header } from "../Header/Header";
import {Card} from '../Card/Card';
import "./Container.css";
export const Container = () => {
  return (
    <div className="container">
      <Header />
      
      <Card/>
    </div>
  );
};
