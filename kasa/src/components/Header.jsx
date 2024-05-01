import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import '../styles/layouts/Header.scss'

function Header() {
    return ( 
        <> 
            <div className='logo'> 
                <img src = {logo} alt= "Logo de Kasa" /> 
            </div>
            <div className="navbar">
                <nav> {/* A modifier plus tard */}
                    <ul className='navOptions'> 
                                    
                        <Link to = '/'> Accueil </Link> 
                         <Link to = '/about' > A propos </Link>  
                    </ul>
                </nav>
            </div>
        </>
     )
}

export default Header;