import { Navbar, Container, Button } from "react-bootstrap";

export default function AppNavbar({ onAuthClick }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>My App</Navbar.Brand>

        <Button variant="light" onClick={onAuthClick}>
          Login / Register
        </Button>
      </Container>
    </Navbar>
  );
}