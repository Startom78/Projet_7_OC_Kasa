import {useState} from 'react'
import '../styles/collapser.css'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

function AboutComponent()  {

        const [fiabilityIsOpen, setFiability] = useState(false)
        const [respectIsOpen, setRespect] = useState(false)
        const [serviceIsOpen, setService] = useState(false)
        const [securityIsOpen, setSecurity] = useState(false)
      
        const toggleCollapseFiability = () => {
            setFiability(!fiabilityIsOpen)
        }

        const toggleCollapseRespect = () => {

            setRespect(!respectIsOpen)
        }

        const toggleCollapseService = () => {

            setService(!serviceIsOpen)
        }

        const toggleCollapseSecurity = () => {

            setSecurity(!securityIsOpen)
        }
    return (
        <div className='collapsers'>
            <div className="collapser" >
                <h2>Fiabilité </h2>
                <span className='chevron' onClick={toggleCollapseFiability} >{fiabilityIsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
                {fiabilityIsOpen && 
                <div className="text">
                    <p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                 </div>} 

            <div className="collapser" >
                <h2> Respect </h2>
                <span className='chevron' onClick={toggleCollapseRespect} >{respectIsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            {respectIsOpen && 
                <div className="text">
                    <p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>}

            <div className="collapser" >
                <h2> Service</h2>
                <span className='chevron' onClick={toggleCollapseService}> {serviceIsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            {serviceIsOpen && 
                <div className="text">
                    <p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>}

            <div className="collapser" >
                <h2> Sécurité </h2>
                <span className='chevron' onClick={toggleCollapseSecurity}> {securityIsOpen? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            {securityIsOpen && 
                <div className="text">
                    <p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>}

        </div>
    )
}

export default AboutComponent