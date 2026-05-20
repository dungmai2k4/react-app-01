import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

export default function Slot6_1() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    return (
        <div style={{ width: '500px', margin: '50px auto' }}>
            <h2>Login</h2>
            <Form onSubmit={(e) => {
                e.preventDefault()
                console.log(formData)
            }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ minWidth: '100px' }}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ minWidth: '100px' }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}