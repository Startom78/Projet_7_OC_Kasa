import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Banner from '../../components/Banner'
import Cards from '../../components/Cards'
import Card from '../../components/Card'
import Layout from '../../components/Layouts/LayoutHome'

import DataProvider from "../../hooks/api"


function Home() {
    const navigate = useNavigate()
    const {data: logements, loading, error} = DataProvider.GetLogements()

    useEffect( () => {
        if (error) {
            navigate("/error")
        }
    }, [error, navigate])

    if(!logements) return(<></>)

    return (
        <Layout 
            hero = {<Banner
                imageUrl={'./images/header_banner.png'}
                title='Chez vous, partout et ailleurs' />} 
            content={
                loading ? (
                    <div>loading ...</div>
                ) : (
                    <Cards>
                        {logements.map((logement,index) => <Card key = {"card-"+ index + "-" + logement.title} title = {logement.title} cover = {logement.cover} link = {"/product/" + logement.id} />)}
                    </Cards>
                )
            } 
        />     
    )
}
export default Home
