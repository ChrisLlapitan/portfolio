import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Jumbo() {
    return (
        <Jumbotron>
            <h1>Batch 101 - Hello user!</h1>
            <p>Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Obcaecati sequi quam nisi doloremque sed, ipsam mollitia sunt consequuntur commodi asperiores delectus blanditiis dicta enim molestias, vero ad ratione voluptate. Facere.</p>
            <Button variant="primary">Go to blogs</Button>
        </Jumbotron>
    )
}