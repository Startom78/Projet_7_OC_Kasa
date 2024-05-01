import Lightbox from "./Lightbox"
import InformationsProduct from "./infoProduct"

function ProductComponent({logement, loading}) {
    return (
        <>{loading ? (
            <div>loading...</div>
        ) : (<>
                <Lightbox pictures = {logement ? logement.pictures : []} />
                <InformationsProduct logement = {logement} />
            </>
        )}</>
        
    )
}

export default ProductComponent