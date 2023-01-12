import './Navbar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <header className='header'>
            <div className='header_container'>
            <h1 className="header_logo"><a href="/" style={{textDecoration:'none'}}>Elixir Store</a></h1>
            
            <nav className="header_nav">
                <Link className="header_link" to="/">Inicio</Link>
                <Link className="header_link" to="/productos/hombre">Hombre</Link>
                <Link className="header_link" to="/productos/mujer">Mujer</Link>

            </nav>
            <nav className='cartWidget'>
            <CartWidget />
            </nav>
            </div>
        </header>
    ) 
}