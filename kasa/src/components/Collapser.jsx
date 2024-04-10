import { useState } from "react"
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import '../styles/collapser.css'

const Collapser = ({title, children, open = true}) => { 
    const [toggle, setToggle] = useState(open)
    return(
        <div className="collapser">
            <div className="title" onClick={() => setToggle(c => !c)}>
                {title} <span className='chevron'>{toggle ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            {toggle && (<div className="content">
                {children}
            </div> )}
        </div>
    )
}

export default Collapser