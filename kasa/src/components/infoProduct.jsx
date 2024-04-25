import {useLocation, useNavigate, useParams} from "react-router-dom"
import Data from '../logements.json'
import Tag from "./tag"
import Collapser from "./Collapser"
import '../styles/product.scss'
import Ratings from "./Ratings"
import LayoutAbcd from "./Layouts/LayoutAbcd"


function InformationsProduct() {
    const array = JSON.parse(JSON.stringify(Data)) 
    const {id : productId} = useParams()
    const productData = array.find(logement => productId === logement.id)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(productData)
    console.log(location)
    if (productData === undefined) {
        navigate('*')
        return null
    }
    const tableauTagsValues = Object.values(productData.tags)
    console.log(tableauTagsValues)
    console.log(productData.host)
    return(
        <div className="main">

            <LayoutAbcd
                componentA = {
                <div className="productLabel">
                    <h2>
                        {productData.title}
                    </h2>

                    <h3> 
                        {productData.location}
                    </h3>
                </div>
                } 
                
                componentB = {
                    <Tag>
    
                        {tableauTagsValues.map((tag, index) => (
                            <div className = 'tag' key={index}>{tag} </div> ))}
    
                    </Tag>  
                }

                componentC = {
                    <div className="profile">

                        <div className="profileName">
                            {productData.host.name.split(" ").map(name => <h3 key= {`name-${name}`}> {name} </h3>)}
                            
                        </div>

                        <img className= 'imgProfile' src = {productData.host.picture} alt = '' />
                        
                    </div>
                }

                componentD = {
                    <div> 
                        <Ratings 
                            value = {productData.rating}
                        />
                    </div>
                }
            />

            <div className="collapserdescriptions">
                <Collapser title={'Description'}>

                    {productData.description}
                                
                </Collapser>

                <Collapser title={'Equipements'}>

                {productData.equipments.map(eq => <p key={"equipment_" + eq}> {eq} </p>)}
                    
                </Collapser>
            </div>


        </div>
    )
}

export default InformationsProduct