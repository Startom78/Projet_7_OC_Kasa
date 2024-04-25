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
                title='Chez vous, partout et ailleurs' />} 
            content={
                <Cards>
                   {array.map((logement,index) => <Card key = {"card-"+ index + "-" + logement.title} title = {logement.title} cover = {logement.cover} link = {"/product/" + logement.id} />)}
               </Cards>
            } 
        />     
    )
}
export default Home
