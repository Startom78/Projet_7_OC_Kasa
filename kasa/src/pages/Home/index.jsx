import Banner from '../../components/Banner'
import Cards from '../../components/Cards'
import Card from '../../components/Card'
import Layout from '../../components/Layouts/LayoutHome'
import Data from '../../../src/logements.json'



function Home() {
    const array = JSON.parse(JSON.stringify(Data))
    return (
        <Layout 
            hero = {<Banner
                imageUrl={'./images/header_banner.png'}
                showTitle={true} />} 
            content={
                <Cards>
                   {array.map((logement,index) => <Card key = {"card-"+ index + "-" + logement.title} title = {logement.title} cover = {logement.cover}/>)}
               </Cards>
            } 
        />     
    )
}
export default Home
