// import React from "react";

// const Courses = () => {
//   return "Courses";
// };

// export default Courses;


import React from 'react';
import {
  Card, Button, CardImg,  CardText, 
   CardBody, Container, Row, Col, CardHeader, CardDeck
} from 'reactstrap';


const Courses = () => {

  return (
    <Container  fluid={true} style={{ marginTop: "50px"}}>
      <div>
        <h1>All Courses</h1>
      </div>
      <CardDeck>
        <Row>
        <Col sm="6">
        <Card style={{marginBottom: "30px"}}>
        <CardBody>
        <CardHeader tag="h4">Certified Scrum Master®</CardHeader>
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardText>
            <ul>
              <li>Price: </li>
              <li>Duration: </li>
              <li>Dates: </li>
            </ul>
          </CardText>
          <Button color="primary">View</Button>
        </CardBody>
      </Card >
      </Col>
      <Col sm="6">
      <Card >
        <CardBody>
        <CardHeader tag="h4">User eXperience (UX) Research</CardHeader>
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="primary">View</Button>
        </CardBody>
      </Card>
      </Col>
      <Col sm="6">
      <Card>
        <CardBody>
        <CardHeader tag="h4">Angular</CardHeader>
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button color="primary">View</Button>
        </CardBody>
      </Card>
      </Col>
      
        </Row>
      <Row>
      <Card>
        <CardBody>
        <CardHeader tag="h4">Header</CardHeader>
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardText>
            <ul>
              <li>Price: </li>
              <li>Duration: </li>
              <li>Dates: </li>
            </ul>
          </CardText>
          <Button color="primary">View</Button>
        </CardBody>
      </Card>
      </Row>
      
    </CardDeck>
    </Container>
    
  );
};

export default Courses;