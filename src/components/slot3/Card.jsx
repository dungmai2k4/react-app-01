export default function Card({ children }) { 
  return (
    <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      {children} {/* Dùng ngoặc nhọn để render nội dung */}
    </div>
  );
}