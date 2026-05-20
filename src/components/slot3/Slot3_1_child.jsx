export default function Slot3_1_child({childProps}) {
  return (
    <div style={{border: '1px solid black', padding: '10px'}}>
      <h2>Child's Information</h2>
      <p>Name: {childProps.name}</p>
      <p>Age: {childProps.age}</p>
    </div>
  );
}