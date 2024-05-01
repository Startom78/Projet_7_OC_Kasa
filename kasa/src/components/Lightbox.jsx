import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../styles/components/lightbox.scss'

function ProductBanner({pictures}) {
    const [current, setCurrent] = useState(0)

    const previousPhoto = () => {
        setCurrent((index) => (index=== 0 ? pictures.length - 1 : index - 1));
    }

    const nextPhoto = () => {
        setCurrent((index) => (index === pictures.length - 1 ? 0 : index + 1));
    }

    if (! pictures.length) return (<></>)

    return (
        <div className="lightbox">
            <img src = {pictures[current]} alt= '' className="picture"/>
            {pictures.length > 1 && (
                <div className="uiContainer">
                    <FaChevronLeft onClick={previousPhoto} className='chevron'/>
                    <p className="counter">{current +1}/{pictures.length}</p> 
                    <FaChevronRight onClick={nextPhoto} className='chevron' />
                </div>
            )}
        </div>
    )
}

export default ProductBanner