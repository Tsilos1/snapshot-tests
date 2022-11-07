import React from 'react'
import Card from 'react-bootstrap/Card';

export default function GitHubCard() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="profilePic.jpg" alt="Tsilos' profile image"/>
        <Card.Body>
          <Card.Title>Tsilos Kosbab</Card.Title>
          <Card.Text>
            Tsilos is a software development student who is learning how to do a snapshot test.
          </Card.Text>
        </Card.Body>
      </Card>

    )
}