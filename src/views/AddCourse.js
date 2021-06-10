import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { addCourse, updateCourse } from "../api";
import { useRouteMatch, useHistory } from "react-router-dom";



const AddCourse = ({ course }) => {

  


  const history = useHistory();

  const [title, setTitle] = useState(course?.title ?? "");
  const [imgPath, setImgPath] = useState(course?.imagePath ?? "");
  const [price, setPrice] = useState({
    normal: course?.price?.normal ?? 0,
    early_bird: course?.price?.early_bird ?? 0
  });
  const [dates, setDates] = useState({
    start_date: course?.dates?.start_date ?? "",
    end_date: course?.dates?.end_date ?? ""
  });
  const [duration, setDuration] = useState(course?.duration ?? "");
  const [book, setBook] = useState(course?.book ?? false);
  const [instructors, setInstructors] = useState(course?.instructors ?? []);
  const [description, setDescription] = useState(course?.description ?? "");

  const titleChangeHandler = e => {
    setTitle(e.target.value);
  };

  const imgPathChangeHandler = e => {
    setImgPath(e.target.value);
  };


  const priceChangeHandler = e => {

    setPrice({
      ...price,
      [e.target.name]: e.target.value
    });
  }

  const datesChangeHandler = e => {
    setDates({
      ...dates,
      [e.target.name]: new Date(e.target.value).toLocaleDateString("el-gr")
    });
  }

  const durationChangeHandler = e => {
    setDuration(e.target.value);
  };

  const bookChangeHandler = e => {
    setBook(e.target.checked);
  };
  const instructorsChangeHandler = (e, i) => {
    if (e.target.checked ) {
      setInstructors([...instructors, i]);
    }
    else {
      setInstructors(instructors.filter(item => item !== i));
    }

    
     
  };

  const descriptionsChangeHandler = e => {
    setDescription(e.target.value);
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(title, imgPath, price.early_bird, price.normal, dates.start_date, dates.end_date, duration, book, instructors, description);
    const courseData = {
      title: title,
      imagePath: imgPath,
      price: {
        normal: price.normal,
        early_bird: price.early_bird
      },
      dates: {
        start_date: dates.start_date,
        end_date: dates.end_date
      },
      duration: duration,
      open: book,
      instructors: instructors,
      description: description
    }
    await addCourse(courseData)
    history.push("/courses");

  }

  const editHandler = async (e) => {
    e.preventDefault();
    console.log(title, imgPath, price.early_bird, price.normal, dates.start_date, dates.end_date, duration, book, instructors, description);
    const courseData = {
      id: course?.id,
      title: title,
      imagePath: imgPath,
      price: {
        normal: price.normal,
        early_bird: price.early_bird
      },
      dates: {
        start_date: dates.start_date,
        end_date: dates.end_date
      },
      duration: duration,
      open: book,
      instructors: instructors,
      description: description
    }
    await updateCourse(courseData)
    history.push("/courses");

  }





  return (
    <Container style={{ backgroundColor: "lightgrey", marginTop: "50px", paddingTop: "30px" }}>
      <Form onSubmit={course ? editHandler : submitHandler}>
        <div>
          <h3>{course ? "Edit Course" : "Add Course"} </h3>
        </div>
        <FormGroup >
          <Label for="title" sm={2}>Title:</Label>
          <Input type="text" name="title" id="title" placeholder="Title" value={ title } onChange={titleChangeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="duration" sm={2}>Duration:</Label>
          <Input type="text" name="duration" id="duration" placeholder="Duration" value={ duration } onChange={durationChangeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="imagePath" sm={2}>Image path:</Label>
          <Input type="text" name="image" id="imagePath" placeholder="Image Path" value={ imgPath } onChange={imgPathChangeHandler} />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" id="checkbox2" onChange={bookChangeHandler} />{' '}
              Bookable
            </Label>
        </FormGroup>

        <hr />

        <div>
          <h3>Instructors</h3>
        </div>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" id="checkbox" onChange={ (e) => instructorsChangeHandler(e, "01")} />{' '}
              John Tsevdos
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" id="checkbox2" onChange={(e) => instructorsChangeHandler(e, "02")} />{' '}
              Yiannis Nikolakopoulos
            </Label>
        </FormGroup>

        <hr />

        <FormGroup>
          <Label for="exampleText" sm={2}>Description:</Label>
          <Input type="textarea" name="text" id="exampleText" value={ description } onChange={descriptionsChangeHandler} />
        </FormGroup>

        <hr />

        <div>
          <h3>Dates</h3>
        </div>
        <FormGroup>
          <Label for="startDate" sm={2}>Start date:</Label>
          <Input type="date" name="start_date" id="start_date" placeholder="Start date" value={ dates.start_date } onChange={datesChangeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="endDate" sm={2}>End date:</Label>
          <Input type="date" name="end_date" id="end_date" placeholder="End date" value={ dates.end_date } onChange={datesChangeHandler} />
        </FormGroup>

        <hr />

        <div>
          <h3>Price</h3>
        </div>
        <FormGroup>
          <Label for="earlyBird" sm={2}>Early Bird:</Label>
          <Input type="number" name="early_bird" id="early_bird" placeholder="0 " value={ price.early_bird } onChange={priceChangeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="normalPrice" sm={2}>Normal price:</Label>
          <Input type="number" name="normal" id="normal" placeholder="0" value={ price.normal } onChange={priceChangeHandler} />
        </FormGroup>

        <hr />


        <FormGroup>
          <Button color="primary" style={{ marginBottom: "30px" }}>Add Course</Button>
        </FormGroup>


      </Form>
    </Container>

  );
}


export default AddCourse;
