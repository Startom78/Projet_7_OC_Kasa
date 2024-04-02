import '../styles/cards.css'
import '../styles/main.css'

function Cards({children}) {
   return ( 
        <div className="cards">
            {children}
        </div>
 )
}

export default Cards;