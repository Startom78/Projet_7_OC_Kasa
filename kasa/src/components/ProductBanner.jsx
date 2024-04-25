import { useState } from "react"
import { useParams } from "react-router-dom"
import Data from '../../src/logements.json'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../styles/product.scss'

function ProductBanner() {
    const array = Data
    const {id : productId} = useParams()
    const productData = array.find(logement => productId === logement.id)
    const [currentPhoto, setCurrentPhoto] = useState(0)

    const previousPhoto = () => {
        setCurrentPhoto((index) => (index=== 0 ? productData.pictures.length - 1 : index - 1));
    }

    const nextPhoto = () => {
        setCurrentPhoto((index) => (index === productData.pictures.length - 1 ? 0 : index + 1));
    }

    const totalImages = productData.pictures.length
    console.log(totalImages)
        return (  
            <div>

                <div className="productBanner">
                    <img src = {productData.pictures[currentPhoto]} alt= '' className="imgProduct"/>
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