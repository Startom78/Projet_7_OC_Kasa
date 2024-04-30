import ProductComponent from "../../components/Product"
import LayoutProduct from '../../components/Layouts/LayoutProduct'
import { useNavigate, useParams} from "react-router-dom"
import { useEffect, useState } from "react"

const Product = () => {
    const {id : productId} = useParams()
    const navigate = useNavigate()
    const [productData, setProductData] = useState(undefined)
    const [loading, setLoading] = useState(false)
    useEffect( () => {
        if (!productId) return
        if (loading || productData) return
        setLoading(true)
        console.log('fetch product')
        fetch('/logements.json') 
            .then(res => res.json())
            .then(data => {
                const matchlogement = data.find(logement => productId === logement.id)
                if (matchlogement === undefined) {
                    navigate('/error')
                }
                setProductData(matchlogement)
                setLoading(false)
            }) 
            return () => {
                console.log('demonte')
            } 
    }, [productId, loading, productData, navigate])
    if(productData === undefined) return (<></>)
    return (
        <LayoutProduct
            main = {<ProductComponent logement = {productData} />}
         />

    )
}

export default Product