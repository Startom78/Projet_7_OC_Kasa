import '../../styles/page.css'

const LayoutPage = ({header, main, footer}) => {
    return (
        <div className="pageLayout">

            <header className='header wrapper'>
                {header}
             </header>

            <main className='main wrapper'>
                {main}
            </main>

            <footer className='footer'>
                {footer}
            </footer>

        </div>
    )
}

export default LayoutPage