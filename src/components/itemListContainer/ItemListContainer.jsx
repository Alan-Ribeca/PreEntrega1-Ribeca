// eslint-disable-next-line react/prop-types
import './itemListContainer.scss'
import { useState, useEffect } from 'react'
import { ItemList } from '../itemList/ItemLis'
// eslint-disable-next-line react/prop-types
export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("./data/productos.json")
        .then(response => response.json())
        .then(prods => {
            setProducts(prods)
        })
    }, [])

    return (
        <section className='containerProductos'>
            <ItemList products={ products } />
        </section>
    )
}