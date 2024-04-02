import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Error404 from "../../components/Error404"
import LayoutPage from "../../components/Layouts/LayoutPage";

function Error() {
    return (
        <LayoutPage 

            header = {<Header />}
            main = {<Error404 />}
            footer= {<Footer />}

         />
    )
}

export default Error