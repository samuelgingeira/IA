import { NavLink } from 'react-router-dom';


export default function Navbar() {
return (
<nav>
<NavLink to="/" end>Inicio</NavLink> |
<NavLink to="/posts">Artículos</NavLink>
</nav>
);
}