import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Error404 from "../../components/Error404"

function Error() {
    return (
        <div>
            <Header />
            <Error404 />
            <Footer />
        </div>
    )
}

export default Error