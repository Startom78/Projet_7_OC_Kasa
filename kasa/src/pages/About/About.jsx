import Banner from '../../components/Banner'
import Layout from '../../components/Layouts/LayoutHome'


function About() {
    return (
        <Layout 
            hero = {<Banner />} 
            content={
                <div>
                    About
                </div>
            } 
        />     
    )
}
export default About
