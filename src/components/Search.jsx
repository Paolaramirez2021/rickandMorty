import { useRef, useState } from 'react'

function Search({ setQuery }) {
    const [error, setError] = useState(null)
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const value = inputRef.current.value.trim()
        const numValue = Number(value)

        setError(null)

        if (!numValue) {
            setError('Please enter a valid location ID')
            return
        }

        if (numValue < 1 || numValue > 126) {
            setError('Location ID must be between 1 and 126')
            return
        }

        setQuery(numValue.toString())
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="flex items-center">
        <input
    className="bg-white text-black px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
    type="text"
    ref={inputRef}
    placeholder="Enter location ID (1-126)"
    />
        <button
    className="bg-emerald-500 text-white px-4 py-2 rounded-r-md hover:bg-emerald-600 transition"
    type="submit"
    >
    Search
        </button>
</form>
{error && (
    <p className="mt-4 p-2 text-sm text-center bg-red-500/80 border border-red-600 rounded text-white">
    {error}
    </p>
)}
        </>
    )
}

export default Search
