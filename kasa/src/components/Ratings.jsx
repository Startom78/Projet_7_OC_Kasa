import { FaStar } from 'react-icons/fa'

const Ratings = ({value}) => {
    const array = new Array(5).fill(1)
    return(
        <>
            {array.map((_, index) => <FaStar key={`star-${index}`}
                 color= {value >= index + 1 ? "#FF6060" : "#E3E3E3" }
            />)} 
        </>
    )
}

export default Ratings