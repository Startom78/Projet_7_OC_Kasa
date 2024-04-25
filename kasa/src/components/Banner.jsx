import '../styles/Banner.css'

function Banner({imageUrl, title, classes = []}) {
        return (     
            <div className={['banner',...classes].join(' ')}>
                <img src= {imageUrl} alt = " Banniere de Kasa" className='imgBanner'/>
                 <h1> {title} </h1>
            </div>
          )
    
}

export default Banner
