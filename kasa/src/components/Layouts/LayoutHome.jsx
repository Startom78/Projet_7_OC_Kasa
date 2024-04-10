import Header from "../Header";
import Footer from "../Footer"
import '../../styles/LayoutHome.css'
import LayoutPage from "./LayoutPage";

const Layout = ({hero,content}) => {
    return (
        <LayoutPage
            header = {<Header />}
            main = 
            {<div className="layout-page">
                {hero}
                {content}
            </div>
            }
            footer={<Footer />}
        />
    )
}

export default Layout;