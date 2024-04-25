import Banner from '../../components/Banner'
import Cards from '../../components/Cards'
import Card from '../../components/Card'
import Layout from '../../components/Layouts/LayoutHome'
import { useEffect, useState } from 'react'



function Home() {
    const [logements, setLogements] = useState(null)
    useEffect( () => {
        fetch('/logements.json') 
            .then(res => res.json())
            .then(data => setLogements(data))  
    }, [])
    if(logements === null) return(<></>)
    return (
        <Layout 
            hero = {<Banner
                imageUrl={'./images/header_banner.png'}
                title='Chez vous, partout et ailleurs' />} 
            content={
                <Cards>
                   {logements.map((logement,index) => <Card key = {"card-"+ index + "-" + logement.title} title = {logement.title} cover = {logement.cover} link = {"/product/" + logement.id} />)}
               </Cards>
            } 
        />     
    )
}
export default Home
