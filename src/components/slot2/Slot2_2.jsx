export default function Slot2_2() {
    const student = {
        name: "Alice",
        age: 21,
        major: "Computer Science"
    };
    return (
        <div className="div">
            <h2>Slot2_2</h2>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Major: {student.major}</p>
            <p>Caculate: {student.age > 20 ? "Over 20" : "Not over 20"}</p>
        </div>
    );
}