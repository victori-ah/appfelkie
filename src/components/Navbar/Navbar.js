import CartWidget from '../CartWidget/CartWidget' ;
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to={`/`}>Felkie</Link>
                <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'><Link className='nav-link' to={`/`}>Home</Link></li>
                        <li className='nav-item'><Link className='nav-link' to={`/`}>About</Link></li>
                        <li className='nav-item'><Link className='nav-link' to={`/category/new`} >New Collection</Link></li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
            <span className='navbar-band'></span>
        </nav>
    )
}

export default Navbar