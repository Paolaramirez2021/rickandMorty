import { useState } from 'react'
import axios from 'axios'

export function useFetch() {
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = async (url) => {
        setLoading(true)
        try {
            const res = await axios.get(url)
            setData(res.data)
            setErrors(null)
        } catch (error) {
            console.error('Error al hacer fetch:', error)
            setErrors(error.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    return { data, errors, loading, fetchData }
}
