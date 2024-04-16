import ProductComponent from "../../components/Product"
import LayoutProduct from '../../components/Layouts/LayoutProduct'

const Product = () => {

    return (
        <LayoutProduct 
            main = {<ProductComponent />}
         />

    )
}

export default Product