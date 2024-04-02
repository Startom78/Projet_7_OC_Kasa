import { Link } from 'react-router-dom';
import '../styles/main404.css'


function Error() {
    return (
        <div className="main404">

            <div className="editNumber404">
                <p> 404 </p>
            </div>

            <div className="editText404">
                <p> Oups! La page que vous demandez n'existe pas. </p>
            </div>

            <div className='linkToMain'>
                <Link to = '/' > Retourner sur la page d'accueil </Link>

            </div>


        </div>

    )
}

export default Error;