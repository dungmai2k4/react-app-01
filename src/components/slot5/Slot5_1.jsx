import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
export default function Slot5_1() {
  return (
    <div>
      <h2>Slot5_1</h2>

      <div className="d-flex gap-5 flex-wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  );
}