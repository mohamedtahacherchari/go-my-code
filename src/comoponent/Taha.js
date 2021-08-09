import React from 'react'
import {Form} from "react-bootstrap"

export default function Taha() {
    return (
        <div>
                <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your fullname here ..." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Email</Form.Label>
    <Form.Control  type="email" placeholder="Enter your email here..." />
  </Form.Group>
</Form>
            
        </div>
    )
}
