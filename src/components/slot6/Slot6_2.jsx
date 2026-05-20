import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";

export default function Slot6_2() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div style={{ padding: '20px' }}>
            <Button variant="info" onClick={handleShow}>
                Product Details
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Đây là phần mô tả chi tiết sản phẩm.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Mua ngay
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}