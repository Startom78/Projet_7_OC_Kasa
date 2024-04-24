import '../styles/Banner.css'

function Banner({imageUrl, showTitle}) {
    
    console.log(window.location.href)
    if(window.location.href === "http://localhost:3000/about") {
        return (     
            <div className='banner about'>
                <img src= {imageUrl} alt = " Banniere de KasaMMMM" className='imgBanner'/>
                {showTitle && <h1> Chez vous, partout et ailleurs </h1>}
            </div>
        
        )
    } 
    else {
        return (     
            <div className='banner'>
                <img src= {imageUrl} alt = " Banniere de Kasa" className='imgBanner'/>
                {showTitle && <h1> Chez vous, partout et ailleurs </h1>}
            </div>
        
        )
    }
}

export default Banner
