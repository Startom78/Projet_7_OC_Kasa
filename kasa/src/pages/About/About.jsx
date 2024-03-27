import Banner from '../../components/Banner'
import Layout from '../../components/Layouts/LayoutHome'


function About() {
    return (
        <Layout 
            hero = {<Banner 
                imageUrl={'./images/about_banner.png'}
                showTitle={false}/>} 
            
            content={
                <div>
                    About
                </div>
            } 

        />    
    )
}
export default About
