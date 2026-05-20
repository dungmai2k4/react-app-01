import { Product } from './Slot3_4_child'

export default function Slot3_4_parent() {
    const products = [
        { id: 1, name: 'Product 1', price: 100, description: 'This is product 1' },
        { id: 2, name: 'Product 2', price: 200, description: 'This is product 2' },
        { id: 3, name: 'Product 3', price: 300, description: 'This is product 3' },
    ];

    return (
        <div>
            <h1>Slot 3.4 Parent</h1>
            {products.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    );
}