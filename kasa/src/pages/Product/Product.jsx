import ProductComponent from "../../components/Product"
import LayoutProduct from '../../components/Layouts/LayoutProduct'
import { useNavigate, useParams} from "react-router-dom"
import { useEffect, useState } from "react"

const Product = () => {
    const [logements, setLogements] = useState(null)
    useEffect( () => {
        fetch('/logements.json') 
            .then(res => res.json())
            .then(data => setLogements(data))  
    }, [])
    const {id : productId} = useParams()
    const navigate = useNavigate()
    const [productData, setProductData] = useState(undefined)
    useEffect(() =>{
        if(logements === null) return 
        const matchlogement = logements.find(logement => productId === logement.id)
        setProductData(matchlogement)
        if (matchlogement === undefined) {
            navigate('/error')
        }
    }, [productId, navigate, logements])
    if(productData === undefined) return (<></>)
    return (
        <LayoutProduct
            main = {<ProductComponent logement = {productData} />}
         />

    )
}

export default Product