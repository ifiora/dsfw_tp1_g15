import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";

import { NotFound } from "./NotFound";
import Home from "./Home";
import Fiora from "./cards/Fiora";
import Dojas from "./cards/Dojas";
import Bari from "./cards/Bari";
import Api from "./api/Api";
import ContactForm from "./ContactForm";

export default function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("/data/cardsData.json");
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error al cargar la informacion de las tarjetas:", error);
      }
    };

    fetchCards();
  }, []);

  if (cards.length === 0) {
    return <div>Cargando...</div>;
  }

  const links = [
    { path: "/", text: "Inicio" },
    { path: "/fiora", text: "Fiora" },
    { path: "/dojas", text: "Dojas" },
    { path: "/bari", text: "Bari" },
    { path: "/api", text: "API" },
  ];

  return (
    <BrowserRouter>
      <nav className="main">
        <ul>
          <li className="titulo">Navegación:</li>
          {links.map((link) => (
            <LinkItem key={link.path} path={link.path} text={link.text} />
          ))}
        </ul>
      </nav>
      <div className="route-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiora" element={<Fiora data={cards[0]} />} />
          <Route path="/dojas" element={<Dojas data={cards[1]} />} />
          <Route path="/bari" element={<Bari data={cards[2]} />} />
          <Route path="/api" element={<Api />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <footer>
        <ContactForm></ContactForm>
      </footer>
    </BrowserRouter>
  );
}

function LinkItem(props) {
  return (
    <li>
      <NavLink
        to={props.path}
        className={({ isActive }) => (isActive ? "active" : "")}
        end
      >
        {props.text}
      </NavLink>
    </li>
  );
}
