import { useEffect, useState } from "react"

// retourne un objet contenant les states de la requête
const useFetch = ({url, settings=undefined, defaultValue=null, timeOut=250}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(defaultValue)

    useEffect(() => {
        // fonction asynchrone qui appelle la requête
        const fetchData = async () => {
            // initialise l'etat "en chargement"
            setLoading(true)
            // desactive toute erreur
            setError(null)
            // simule un fetch à un backend (plus lent)
            setTimeout(async() => {
                try {
                    const response = await fetch (url, settings)
                    const result = await response.json()
                    // remplit l'état de la réponse
                    setData(result)
                    // desactive l'état "en chargement"
                    setLoading(false)
                } catch (err) {
                    // si erreur ...
                    setError(err)
                    setLoading(false)
                }
            }, timeOut)
        }

        fetchData()
    }, [setLoading, setError, setData, url, settings, timeOut])

    // retourne l'objet contenant les états
    return {data, loading, error}
}

export default useFetch