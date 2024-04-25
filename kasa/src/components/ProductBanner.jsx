import { useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../styles/product.scss'

function ProductBanner({logement}) {
    const [currentPhoto, setCurrentPhoto] = useState(0)
    const [totalImages, setTotalImages] = useState(null)
    const previousPhoto = () => {
        setCurrentPhoto((index) => (index=== 0 ? logement.pictures.length - 1 : index - 1));
    }

    const nextPhoto = () => {
        setCurrentPhoto((index) => (index === logement.pictures.length - 1 ? 0 : index + 1));
    }
    useEffect(() => {
        setTotalImages(logement.pictures.length)
    },[logement]) 
    if(totalImages === null) return (<></>)
        return (  
            <div>

                <div className="productBanner">
                    <img src = {logement.pictures[currentPhoto]} alt= '' className="imgProduct"/>
                    {totalImages > 1 && (
                        <div className="uiContainer">
                        <FaChevronLeft onClick={previousPhoto} className='chevron'/>
                         <p className="counter">{currentPhoto +1}/{totalImages}</p> 
                        <FaChevronRight onClick={nextPhoto} className='chevron' />
                         </div> )} 
                        
                        

                </div>   
            </div>
        )
}

export default ProductBanner