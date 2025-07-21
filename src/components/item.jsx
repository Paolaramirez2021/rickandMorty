import { useEffect } from "react"
import { useFetch } from "../hooks/useFetch"

function Item ({ url }) {
    const { fetchData, data, loading, errors } = useFetch()   
    
        useEffect(() => {
            fetchData(url)
        }, [url])

        if (errors) return <p>{errors}</p>

        if (loading) return <p>Loading...</p>
        return (
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-4 text-center border hover:scale-105 transition-transform duration-300">
                <img className="rounded-full mx-auto mb-2" src={data?.image} alt={data?.name} width={85} />
                <h5 className="text-lg font-semibold text-purple-700">{data?.name}</h5>
            </div>
)
}

export default Item