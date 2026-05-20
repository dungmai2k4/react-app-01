import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Slot5_3() {
  const items = Array.from({ length: 5 });

  return (
    <div className="container">
      <h2>Slot5_3</h2>

      <Row className="justify-content-center">
        {items.map((_, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Card {index + 1}</Card.Title>
                <Card.Text>
                  Some quick example text for the card content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}