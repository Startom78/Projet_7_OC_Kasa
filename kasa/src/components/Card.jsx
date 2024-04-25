import { Link } from 'react-router-dom';
import '../styles/card.scss'


function Card({title, cover, link}) {
    return (
            <figure className='card'>
                
                <img className = 'imgCard' src={cover} alt = '' />
                <figcaption className='description'> {title} </figcaption>
                <Link to = {link} className='link' /> 
            </figure>

    )
}

export default Card;