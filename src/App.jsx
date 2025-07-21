import { useEffect, useRef, useState } from 'react'
import List from './components/List'
import Location from './components/Location'
import { useFetch } from './hooks/useFetch'
import { getRandomId } from './lib/utils'
import Search from './components/Search'

const BASE_URL = 'https://rickandmortyapi.com/api/location/'

function App () {
    const [query, setQuery] = useState(getRandomId)
    const { fetchData, data, loading, errors } = useFetch()

    useEffect(() => {
    if (!query) return
    fetchData(`${BASE_URL}${query}`)
    }, [query])

    return (
    <div>
        <section className='relative w-full h-64 bg-center bg-cover' style={{ backgroundImage: `url(https://wallpapercat.com/w/full/0/1/7/124947-3840x2160-desktop-4k-rick-and-morty-background-photo.jpg)` }}>
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 flex items-center justify-center h-full">
    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-md shadow-md">
        <Search setQuery={setQuery} />
    </div>
    </div>
</section>


      {/* Data */}
        {errors && <p>{errors}</p>}
        {loading && <p>Loading...</p>}
        {data && <Location location={data} />}
        {data && <List residents={data.residents} />}
    </div>
)
}

export default App
