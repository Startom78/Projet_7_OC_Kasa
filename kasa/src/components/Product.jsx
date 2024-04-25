import ProductBanner from "./ProductBanner"
import InformationsProduct from "./infoProduct"

function ProductComponent({logement}) {
    return (
        <>
            <ProductBanner logement = {logement} />
            <InformationsProduct logement = {logement} />
        </>
        
    )
}

export default ProductComponent