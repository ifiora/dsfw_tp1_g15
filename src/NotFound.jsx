import { Link } from "react-router-dom";
export function NotFound() {
  return (
    <div>
      <div>Página no encontrada</div>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
}
