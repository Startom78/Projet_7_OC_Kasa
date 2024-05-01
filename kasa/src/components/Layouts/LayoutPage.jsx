import '../../styles/layouts/page.scss'

const LayoutPage = ({header, main, footer}) => {
    return (
        <div className="pageLayout">

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

export default LayoutPage