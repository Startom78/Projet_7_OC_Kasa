import { useParams } from "react-router-dom"
import Header from "../../components/Header"
import '../../styles/Header.css'

const Product = () => {
    const params = useParams()
    console.log('Product', params)

    return (
        <Header />

    )
}

export default Product