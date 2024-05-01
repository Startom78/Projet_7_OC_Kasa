import { Link } from 'react-router-dom';
import '../styles/components/card.scss'


function Card({title, cover, link}) {
    return (
        <Link to = {link} className='card'>
            <figure className='figure'>
                <img className = 'imgCard' src={cover} alt = '' />
                <figcaption className='description'> {title} </figcaption>
            </figure>
        </Link>
    )
}

export default Card;