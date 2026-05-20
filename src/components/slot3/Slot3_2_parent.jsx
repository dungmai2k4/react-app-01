import Card from './Card'
export default function Slot3_2_parent() {

  return (
    <div className="div">
        <h1>Demo children props</h1>
        <Card>
            <p>Noi dung ben trong the Card</p>
        </Card>
        <Card>
            <button>Click me</button>
        </Card>
    </div>
  );
}