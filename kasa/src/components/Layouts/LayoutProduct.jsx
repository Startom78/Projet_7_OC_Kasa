import Header from "../Header";
import Footer from "../Footer"
import '../../styles/LayoutHome.css'
import LayoutPage from "./LayoutPage";

const LayoutProduct = ({main}) => {
    return (
        <LayoutPage
            header = {<Header />}
            main = 
            {<div className="layout-page">
                {main}
            </div>
            }
            footer={<Footer />}
        />
    )
}

export default LayoutProduct