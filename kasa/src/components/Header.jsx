import logo from '../assets/logo.png'
import '../styles/Header.css'

function Header() {
    return ( 
        <header> 
            <div className='header'> 
                <div className='logo'> 
                    <img src = {logo} alt= "Logo de Kasa" /> 
                </div>
                <div className="navbar">
                    <nav> {/* A modifier plus tard */}
                        <ul className='navOptions'> 
                            
                            <a href = '#' onClick = {clicked}> Accueil </a> 
                            <a href= '#' onClick = {clicked}> A propos </a>  
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
     )
}

function clicked() {
    console.log("Erreur 404...pour l'instant !")
}
export default Header;