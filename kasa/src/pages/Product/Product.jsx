import { useParams } from "react-router-dom"

const Product = () => {
    const params = useParams()
    console.log('Product', params)

    return (<h1> {'product:' + params.id} </h1>)
}

export default Product