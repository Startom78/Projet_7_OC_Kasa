import '../styles/cards.css'
function Cards({children}) {
   return ( 
   <main>
        <div className="cards">
            {children}
        </div>
    </main>
 )
}

export default Cards;