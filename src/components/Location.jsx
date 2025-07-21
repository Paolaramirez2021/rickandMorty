function Location ({ location }) {
    if (!location) return <p>Loading location...</p>

    return (
    <div className='p-6'>
    <div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-2xl max-w-2xl mx-auto rounded-xl p-6 border border-emerald-300'>
    <h2 className='text-3xl font-bold text-emerald-600 mb-4'>{location.name}</h2>
    <ul className='space-y-2'>
        <li><b>Type</b>: {location.type}</li>
        <li><b>Dimension</b>: {location.dimension}</li>
        <li><b>Population</b>: {location.residents.length}</li>
    </ul>
    </div>
</div>
    )
}
export default Location