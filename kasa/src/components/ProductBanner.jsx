import { useState } from "react"
import { useParams } from "react-router-dom"
import Data from '../../src/logements.json'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../styles/product.css'

function ProductBanner() {
    const array = JSON.parse(JSON.stringify(Data)) 
    const {id : productId} = useParams()
    const productData = array.find(logement => productId === logement.id)
    const [currentPhoto, setCurrentPhoto] = useState(0)

    const previousPhoto = () => {
        setCurrentPhoto((previousPhoto) => (previousPhoto === 0 ? productData.pictures.length - 1 : previousPhoto - 1));
    }

    const NextPhoto = () => {
        setCurrentPhoto((previousPhoto) => (previousPhoto === productData.pictures.length - 1 ? 0 : previousPhoto + 1));
    }

    const position = currentPhoto+ 1
    const totalImages = productData.pictures.length
    console.log(totalImages)
        return (  
            <div>

                <div className="productBanner">
                    <FaChevronLeft onClick={previousPhoto} className='chevron'/>
                
                    <img src = {productData.pictures[currentPhoto]} alt= '' className="imgProduct"/>
                    
                    <FaChevronRight onClick={NextPhoto} className='chevron' />

                    <p className="counter">{position}/{totalImages}</p> 
                </div>   
            </div>
        )
}

export default ProductBanner