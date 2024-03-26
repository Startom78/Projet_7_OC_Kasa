import Banner from '../../components/Banner'
import Cards from '../../components/Cards'
import Card from '../../components/Card'
import Layout from '../../components/Layouts/LayoutHome'


function Home() {
    const array = [{title: "logement 1"}, {title : "logement 2"}, {title: "logement 3"} ]
    return (
        <Layout 
            hero = {<Banner />} 
            content={
                <Cards>
                   {array.map((logement,index) => <Card key = {"card-"+ index + "-" + logement.title} title = {logement.title}/>)}
               </Cards>
            } 
        />     
    )
}
export default Home
