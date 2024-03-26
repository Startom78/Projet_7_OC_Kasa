import Header from "../Header";
import Footer from "../Footer"
import '../../styles/LayoutHome.css'

const Layout = ({hero,content}) => {
    return (
        <>
            <div className="LayoutHome">
                <Header />
                    {hero}
                    {content}
            </div>
            <Footer />
        </>
    )
}

export default Layout;