/* eslint-disable react/prop-types */
export const Item = ({ product }) => {
    return (
        <section className="Productos">
            <img src={`./img/${product.img}`} alt={`Imagen de ${product.title}`} />
            <h2>{product.title} {product.description}</h2>
            <p>Tamaño maseta: {product.size}</p>
            <p>Stock: {product.stock}</p>
            <div>
                <span>${product.price}</span>
                <button>
                    Add to Cart
                </button>
            </div>
        </section>
    )
}