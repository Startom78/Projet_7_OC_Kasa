import '../styles/Banner.css'

function Banner({imageUrl, showTitle}) {
    return (     
        <div className='banner'>
            <img src= {imageUrl} alt = " Banniere de Kasa" className='imgBanner'/>
            {showTitle && <h1> Chez vous, partout et ailleurs </h1>}
        </div>
    
    )
}

export default Banner
