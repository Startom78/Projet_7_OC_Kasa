import Banner from '../../components/Banner'
import Layout from '../../components/Layouts/LayoutHome'
import AboutComponent from '../../components/About'


function About() {
    return (
        <Layout 
            hero = {<Banner classes = {['about']}
                imageUrl={'./images/about_banner.png'}
                title= '' />} 
            
            content={
                <div>
                    <AboutComponent />
                </div>
            } 

        />
    )
}
export default About
