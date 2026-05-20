export function Product({ name, price, description }) {
    return (
      <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>{description}</p>
      </div>
    );
}