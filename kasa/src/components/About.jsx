import {useState} from 'react'
import '../styles/collapser.css'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

function AboutComponent()  {

        const [isOpen, setIsOpen] = useState(false)
      
        const toggleCollapse = () => {
          setIsOpen(!isOpen)
        }
    return (
        <div className='collapsers'>
            <div className="collapser" onClick={toggleCollapse}>
                <h2>Fiabilité </h2>
                <span className='chevron'>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
                {isOpen && 
                <div className="text">
                    <p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                 </div>} 

            <div className="collapser" onClick={toggleCollapse}>
                <h2> Respect </h2>
                <span className='chevron'>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            {isOpen && 
                <div className="text">
                    <p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>}

            <div className="collapser" onClick={toggleCollapse}>
                <h2> Service</h2>
                <span className='chevron'>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            {isOpen && 
                <div className="text">
                    <p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>}

            <div className="collapser" onClick={toggleCollapse}>
                <h2> Sécurité </h2>
                <span className='chevron'>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            {isOpen && 
                <div className="text">
                    <p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>}

        </div>
    )
}

export default AboutComponent