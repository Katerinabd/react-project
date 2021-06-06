import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input,  Container } from 'reactstrap';

// const AddCourse = () => {
//   return "AddCourse ";
// };

// export default AddCourse ;


const AddCourse = () => {
  return (
    <Container style={{backgroundColor: "lightgrey", marginTop: "50px", paddingTop: "30px"}}>
      <Form>
      <div>
        <h3>Add Course</h3>
      </div>
      <FormGroup>
        <Label for="title" sm={2}>Title:</Label>
          <Input type="text" name="title" id="title" placeholder="Title" />
      </FormGroup>
      <FormGroup>
        <Label for="duration" sm={2}>Duration:</Label>
          <Input type="text" name="duration" id="duration" placeholder="Duration" />
      </FormGroup>
      <FormGroup>
        <Label for="imagePath" sm={2}>Image path:</Label>
          <Input type="text" name="image" id="imagePath" placeholder="Image Path" />
      </FormGroup>
      <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Bookable
            </Label>
          </FormGroup>

          <hr/>

          <div>
        <h3>Instructors</h3>
      </div>
      <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              John Tsevdos
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Yiannis Nikolakopoulos
            </Label>
          </FormGroup>

          <hr/>

      <FormGroup>
        <Label for="exampleText" sm={2}>Description:</Label>
          <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

      <hr/>

      <div>
        <h3>Dates</h3>
      </div>
      <FormGroup>
        <Label for="startDate" sm={2}>Start date:</Label>
          <Input type="text" name="startDate" id="startDate" placeholder="Start date" />
      </FormGroup>
      <FormGroup>
        <Label for="endDate" sm={2}>End date:</Label>
          <Input type="text" name="endDate" id="endDate" placeholder="End date" />
      </FormGroup>

      <hr/>

      <div>
        <h3>Price</h3>
      </div>
      <FormGroup>
        <Label for="earlyBird" sm={2}>Early Bird:</Label>
          <Input type="text" name="earlyBird" id="earlyBird" placeholder="0 " />
      </FormGroup>
      <FormGroup>
        <Label for="normalPrice" sm={2}>Normal price:</Label>
          <Input type="text" name="normalPrice" id="endDate" placeholder="0" />
      </FormGroup>

      <hr/>


      <FormGroup>
      <Button color="primary" style={{marginBottom: "30px"}}>Add Course</Button>
      </FormGroup>
          
     
    </Form>
    </Container>
    
  );
}

export default AddCourse;
