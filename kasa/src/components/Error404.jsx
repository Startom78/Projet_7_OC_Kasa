function Error() {
    return (
        <main>

            <div>
                <p className="editNumber"> 404 </p>
            </div>

            <div className="editText">
                <p> Oups! La page que vous demandez n'existe pas </p>
            </div>

            <a href= '#' className="editLink">
                <p> Retourner à la page d'accueil </p>
            </a>

        </main>

    )
}

export default Error;