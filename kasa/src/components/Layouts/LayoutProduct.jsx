import '../../styles/product.css'

const LayoutProduct = ({header, main, footer}) => {
    return (
        <div className="productLayout">

            <header className='header wrapper'>
                {header}
             </header>

            <div className='wrapper'>
                {main}
            </div>

            <footer className='footer'>
                {footer}
            </footer>

        </div>
    )
}

export default LayoutProduct