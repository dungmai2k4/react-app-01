import Slot3_1_child from "./Slot3_1_child";
export default function Slot3_1_parent() {
  const childData = {
    name: "Alice",
    age: 10
  };

  return (
    <div style={{border: '2px solid blue', padding: '20px'}}>
      <h1>Slot 3.1 Parent</h1>
      <Slot3_1_child childProps={childData} />
    </div>
  );
}