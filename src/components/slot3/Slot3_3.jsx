export default function Slot3_3() {
    const students = [
        { id: 1, name: 'Alice', age: 20 },
        { id: 2, name: 'Bob', age: 22 },
        { id: 3, name: 'Charlie', age: 21 },
    ];
  return (
    <div>
      <h1>Slot 3.3 danh sách sinh viên</h1>
        {students.map((student) => (
          <div key={student.id}>
            <strong>{student.name}</strong> - {student.age} years old
          </div>
        ))}
    </div>
  );
}