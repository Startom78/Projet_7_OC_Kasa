import { FaStar } from 'react-icons/fa'
import '../styles/product.css'

const Ratings = ({value}) => {
    const array = new Array(5).fill(1)
    return(
        <div className='stars'>
            {array.map((_, index) => <FaStar className = "star" key={`star-${index}`}
                 color= {value >= index + 1 ? "#FF6060" : "#E3E3E3" }
            />)} 
        </div>
    )
}

export default Ratings