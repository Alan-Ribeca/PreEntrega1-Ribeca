// eslint-disable-next-line react/prop-types
import './itemListContainer.scss'
// eslint-disable-next-line react/prop-types
export const ItemListContainer = ({greeting}) => {
    return (
        <div className='container'>
            <p>{greeting}</p>
        </div>
    )
}