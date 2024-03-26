import '../styles/card.css'

function Card({title}) {
    return (
            <article className='card'>
                        <p> {title} </p>
            </article>

    )
}

export default Card;