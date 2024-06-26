import Tag from "./tag"
import Collapser from "./Collapser"
import '../styles/pages/product.scss'
import Ratings from "./Ratings"
import LayoutAbcd from "./Layouts/LayoutAbcd"

function InformationsProduct({logement}) {

    if (!logement) return (<></>)

    return(
        <div className="main">

            <LayoutAbcd
                componentA = {
                <div className="productLabel">
                    <h2>
                        {logement.title}
                    </h2>

                    <h3> 
                        {logement.location}
                    </h3>
                </div>
                } 
                
                componentB = {
                    <Tag>
                        {logement.tags.map((tag, index) =>
                            <div className = 'tag' key={index}>{tag}</div>
                        )}
                    </Tag>  
                }

                componentC = {
                    <div className="profile">

                        <div className="profileName">
                            {logement.host.name.split(" ").map(name => <h3 key= {`name-${name}`}> {name} </h3>)}
                            
                        </div>

                        <img className= 'imgProfile' src = {logement.host.picture} alt = '' />
                        
                    </div>
                }

                componentD = {
                    <div> 
                        <Ratings 
                            value = {logement.rating}
                        />
                    </div>
                }
            />

            <div className="collapserdescriptions">
                <Collapser title={'Description'}>

                    {logement.description}
                                
                </Collapser>

                <Collapser title={'Equipements'}>

                {logement.equipments.map(eq => <p key={"equipment_" + eq}> {eq} </p>)}
                    
                </Collapser>
            </div>


        </div>
    )
}

export default InformationsProduct