import Collapser from './Collapser'
import '../styles/about.css'

function AboutComponent()  {

    return (
        <div className='collapsers'>
            <Collapser title={'Fiabilité'}>
                <p className='text'> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapser>

            <Collapser title={'Respect'}>
                <p className='text'> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapser>

            <Collapser title={'Sécurité'}>
                <p className='text'> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapser>

            <Collapser title={'Service'}>
                <p className='text'> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapser>

        </div>
    )
}

export default AboutComponent