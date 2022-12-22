import './Navbar.css'
import CartWidget from './CartWidget'
export const Navbar = () => {

    return (
        <header className='header'>
            <div className='header_container'>
            <h1 className="header_logo">Elixir Store</h1>
            
            <nav className="header_nav">
                <a className="header_link" href="#">Home</a>
                <a className="header_link" href="#">Link</a>
                <a className="header_link" href="#">Link</a>
                <a className="header_link" href="#">Link</a>
            </nav>
            <nav className='cartWidget'>
            <CartWidget />
            </nav>
            </div>
        </header>
    ) 
}