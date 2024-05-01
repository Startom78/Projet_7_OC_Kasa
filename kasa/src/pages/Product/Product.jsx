import ProductComponent from "../../components/Product"
import LayoutProduct from '../../components/Layouts/LayoutProduct'
import { useNavigate, useParams} from "react-router-dom"
import { useEffect } from "react"
import API from "../../hooks/api"

const Product = () => {
    const {id : productId} = useParams()
    const navigate = useNavigate()
    const {logement, loading, error} = API.GetLogement(productId)

    useEffect( () => {
        if (error) {
            console.log("error : ", error)
            navigate('/error/404')
        }
    }, [error, navigate])

    return (
        <LayoutProduct
            main = {<ProductComponent loading = {loading} logement = {logement} />}
         />

    )
}

export default Product