import { useParams } from "react-router-dom"
import Data from '../logements.json'
import Tag from "./tag"
import '../styles/product.css'
import Collapser from "./Collapser"


function InformationsProduct() {
    const array = JSON.parse(JSON.stringify(Data)) 
    const {id : productId} = useParams()
    const productData = array.find(logement => productId === logement.id)
    const tableauTagsValues = Object.values(productData.tags)
    console.log(tableauTagsValues)
    console.log(productData.host)
    return(
        <div className="main">

            <div >
                <h2>
                    {productData.title}
                </h2>

                <h3> 
                    {productData.location}
                </h3>

                <div className="tags">
                    <Tag>

                        {tableauTagsValues.map((tag, index) => (
                            <div className = 'tag' key={index}>{tag} </div> ))}

                    </Tag>
                </div>
                <div className="profileAndStars">

                    <h3>
                        {productData.host.name}
                        
                    </h3>

                    <img className= 'imgProfile' src = {productData.host.picture} alt = '' />
                    <FontAwesomeIcon icon="fa-duotone fa-star" />
                </div> 
            </div>

            <div className="collapsers">
                <Collapser title={'Description'} className= 'collapserProduct'>

                    {productData.description}
                                
                </Collapser>

                <Collapser title={'Equipements'}>

                {productData.equipments}
                    
                </Collapser>
            </div>


        </div>
    )
}

export default InformationsProduct