import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productcard({ item }) {
  const addToCart = (productName) => {
    alert(`${productName}added to cart`)
  }

  return (
    <>
      <Card className="card">
        <Card.Img variant="top" src={item?.image} className="productimage" />
        <Card.Body className="cardbody">
          <Card.Title>{item?.title}</Card.Title>
          <Card.Text className="text-muted">{item?.description.slice(0, 100)}...</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <span><Card.Text className="fw-bold">${item?.price}</Card.Text></span>
            <Button variant="primary" className="btn-sm" onClick={() => addToCart(item.title)}>View Details</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Productcard
