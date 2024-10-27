import "./assets/App.css";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";

import { NotFound } from "./NotFound";
import Home from "./Home";
import Fiora from "./Fiora";
import Dojas from "./Dojas";
import Bari from "./Bari";
import Api from "./Api";

import fotoFiora from "./assets/foto_fiora.jpg";
import fotoDojas from "./assets/foto_dojas.jpg";
import fotoBari from "./assets/foto_bari.jpg";

export default function App() {
  const links = [
    { path: "/", text: "Inicio" },
    { path: "/fiora", text: "Fiora" },
    { path: "/dojas", text: "Dojas" },
    { path: "/bari", text: "Bari" },
    { path: "/api", text: "API" },
  ];

  const cards = [
    {
      name: "Ignacio Fiora",
      description:
        "Mi nombre es Ignacio, tengo 38 años. Trabajo como programador freelance y en mi tiempo libro disfruto practicar Taekwondo y jugar al Fútbol.",
      link: {
        href: "https://www.linkedin.com/in/ignacio-fiora-6a02b229/",
        text: "Linkedin",
      },
      img: fotoFiora,
    },
    {
      name: "Javier Dojas",
      description:
        "Me gustan los deportes y los videojuegos. Actualmente estoy concentrándome en el running, poniéndole mucha dedicación para estar a punto para las carreras de 10km de fin de año.",
      link: {
        href: "https://www.instagram.com/javidodge",
        text: "Instagram",
      },
      img: fotoDojas,
    },
    {
      name: "Pablo Bari",
      description:
        "Allá por el 2003 terminé mis estudios en sistemas, pero por problemas de la vida, nunca pude trabajar en el sector. Desde el año 2020 me propuse actualizarme en las nuevas tecnologías de desarrollo.",
      link: {
        href: "https://www.linkedin.com/in/pablo-bari-20b9a1214/",
        text: "Linkedin",
      },
      img: fotoBari,
    },
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiora" element={<Fiora data={cards[0]} />} />
        <Route path="/dojas" element={<Dojas data={cards[1]} />} />
        <Route path="/bari" element={<Bari data={cards[2]} />} />
        <Route path="/api" element={<Api />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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
