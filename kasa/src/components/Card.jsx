import { Link } from 'react-router-dom';
import '../styles/card.css'


function Card({title, cover}) {
    return (
            <article className='card'>
                
                <p className='description'> {title} </p>
                <img className = 'imgCard' src={cover} alt = '' />
                <Link to ='/vincelebg' className='link' /> 
            </article>

    )
}

export default Card;