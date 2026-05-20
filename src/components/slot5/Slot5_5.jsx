import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Slot5_5() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Đăng nhập</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            {/* Tài khoản */}
            <Form.Group className="mb-3">
              <Form.Label>Tài khoản</Form.Label>
              <Form.Control type="text" placeholder="Nhập tài khoản" />
            </Form.Group>

            {/* Mật khẩu */}
            <Form.Group className="mb-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="Nhập mật khẩu" />
            </Form.Group>

            {/* Checkbox */}
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Ghi nhớ đăng nhập"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Tôi đồng ý với điều khoản"
              />
            </Form.Group>

            {/* Nút */}
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Đăng nhập
              </Button>

              <Button variant="success">
                Đăng ký
              </Button>

              <Button variant="link">
                Tìm tài khoản
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}