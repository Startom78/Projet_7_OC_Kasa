import Banner from '../../components/Banner'
import Layout from '../../components/Layouts/LayoutHome'
import AboutComponent from '../../components/About'


function About() {
    return (
        <Layout 
            hero = {<Banner 
                imageUrl={'./images/about_banner.png'}
                showTitle={false}/>} 
            
            content={
                <div>
                    <AboutComponent />
                </div>
            } 

        />
    )
}
export default About
