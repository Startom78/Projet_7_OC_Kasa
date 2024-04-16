import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footerInfos'>
            <img src= {`${process.env.PUBLIC_URL}/images/logo_footer.png`} width='122px' height='40px'  alt = 'Logo de Kasa'/>
            <p className='copyright'> © 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;