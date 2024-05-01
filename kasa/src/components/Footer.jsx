import { NavLink } from 'react-router-dom';
import '../styles/layouts/Footer.scss'

function Footer() {
    return (
        <div className='footerInfos'>
            <NavLink to="/" className="link">
                <img src= {`${process.env.PUBLIC_URL}/images/logo_footer.png`} width='122px' height='40px'  alt = 'Logo de Kasa'/>
            </NavLink>
            <p className='copyright'> © 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;