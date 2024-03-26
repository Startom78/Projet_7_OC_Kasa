import {BrowserRouter,Route,Routes} from "react-router-dom"
import HomePage from '../pages/Home'
import ProductPage from '../pages/Product/Product'
import ErrorPage from '../pages/Error/Error'
import AboutPage from '../pages/About/About'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route exact path="/about" element={<AboutPage />}/>
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
