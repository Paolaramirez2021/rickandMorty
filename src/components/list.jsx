import Item from './Item'

function List ({ residents = [] }) {
    return (    
    <div className="p-6">
    {residents.length === 0 ? (
    <p className="text-center text-gray-500 italic">Residents not found</p>
) : (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {residents.map(r => (
        <Item key={r} url={r} />
        ))}
    </div>
    )}
</div>

)
}
export default List 