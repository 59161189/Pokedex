import '../style/nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="navbar">
            <div className="nav-items">
                <Link to="/Pokedex"><img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="logo" /></Link>
                {/* <NavInput /> */}
                <ul className="navlinks">
                    <Link to="/Pokedex" style={{ textDecoration: "none" }}><li>All pokemons</li></Link>
                    <Link to="/Pokedex/type" style={{ textDecoration: "none" }}><li>types</li></Link>
                    <Link to="/Pokedex/stats" style={{ textDecoration: "none" }}><li>stats</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Nav;