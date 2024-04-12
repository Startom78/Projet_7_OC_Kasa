import '../../styles/Header.css'
import '../../styles/Footer.css'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ProductComponent from "../../components/Product"
import LayoutProduct from '../../components/Layouts/LayoutProduct'

const Product = () => {

    return (
        <LayoutProduct 

            header = {<Header />}
            main = {<ProductComponent />}
            footer= {<Footer />}

         />

    )
}

export default Product