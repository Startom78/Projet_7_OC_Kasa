import { useEffect, useState } from "react"
import useFetch from "./useFetch"

const HOST = `${process.env.PUBLIC_URL}`
const API_PATH = "/"

const API = {
   
    GetLogements : () => {
        return useFetch({url: `${HOST}${API_PATH}logements.json`, defaultValue: []})
    },

    GetLogement: (id) => {
        const [logement, setLogement] = useState(null)
        const [error, setError] = useState(null)
        const {data: logements, loading, error: fetchError} = useFetch({url: `${HOST}${API_PATH}logements.json`})

        useEffect(() => {
            if (fetchError) {
                setError(fetchError)
                return
            }
            if (logements) {
                const result = logements.find(logement => id === logement.id)
                if (result) {
                    setLogement(result)
                } else {
                    setError(404)
                }
            }
        }, [logements, setLogement, id, fetchError])

        return {logement, loading, error}
    },
}


export default API