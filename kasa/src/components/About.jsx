import Collapser from './Collapser'
import '../styles/pages/about.scss'

function AboutComponent()  {

    return (
        <div className='collapsers'>
            <Collapser title={'Fiabilité'}>
                <p className='text'> Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </Collapser>

            <Collapser title={'Respect'}>
                <p className='text'> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapser>

            <Collapser title={'Service'}>
                <p className='text'> Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </Collapser>

            <Collapser title={'Sécurité'}>
                <p className='text'> La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </Collapser>

        </div>
    )
}

export default AboutComponent