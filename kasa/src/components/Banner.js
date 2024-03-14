import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    return ( 
    <header> 
        <div className='header'> 
            <div className='logo'> 
                <img src = {logo} alt= "Logo de Kasa" /> 
            </div>
            <div className="navbar">
                <nav> {/* A modifier plus tard */}
                    <ul className='navOptions'> 
                        
                        <a href = '#'> Accueil </a> 
                        <a href= '#'> A propos </a>  
                    </ul>
                </nav>
            </div>
        </div>
            
            <div className='banner'>
                <img src= "./images/header_banner.png" alt = " Banniere de Kasa" className='imgBanner'/>
                <h1 className='title'> Chez vous, partout et ailleurs </h1>
            </div>
    </header>
    )
}

export default Banner
