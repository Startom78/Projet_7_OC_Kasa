import '../styles/cards.scss'
import '../styles/main.scss'

function Cards({children}) {
   return ( 
        <div className="cards">
            {children}
        </div>
 )
}

export default Cards;