import Header from "../Header";
import Footer from "../Footer"
import '../../styles/layouts/LayoutHome.scss'
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

export default Layout