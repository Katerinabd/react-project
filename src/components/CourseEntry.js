import React, { useState } from "react";
import { Row, Col, Button, ModalBody, ModalHeader, Modal } from "reactstrap";
import AddCourse from "../views/AddCourse";


const CourseEntry = ({
  course,
  handleDelete,
}) => {
  const {id,
    title,
    imagePath,
    price,
    open,
    duration,
    dates,
    description} = course;
  const { start_date, end_date } = dates;
  const startDateFormatted = new Date(start_date).toLocaleDateString("el-gr");
  const endDateFormatted = new Date(end_date).toLocaleDateString("el-gr");
  const bgImageStyle = {
    height: "250px",
    background: `url(${imagePath}) no-repeat top left`,
    backgroundSize: "100% 100%",
  };

  const [openModal, setOpenModal] = useState(false);

  const toggleEditModal = () => {
    setOpenModal(!openModal);
  }


  return (
    <>
      <Modal isOpen={openModal} toggle={toggleEditModal} size="lg">
        <ModalHeader toggle={toggleEditModal}>
          {`Edit Course: ${title}`}
        </ModalHeader>
        <ModalBody>
          <AddCourse course = {course} />
        </ModalBody>
      </Modal>
      <Row>
        <Col xs={12}>
          <h1>
            {title} <small>({id})</small>
          </h1>
          <div style={bgImageStyle}></div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={6}>
          <h4>Price: {price.normal} €</h4>
          <h4 style={{ marginBottom: "20px" }}>Bookable: {open ? "✔" : "✖"}</h4>
        </Col>
        <Col xs={6}>
          <h4 className="text-right">Duration: {duration}</h4>
          <h4 className="text-right">
            Dates: {startDateFormatted} - {endDateFormatted}
          </h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div
            className="lead m-top"
            dangerouslySetInnerHTML={{ __html: description }}
            style={{ marginBottom: "30px" }}
          />
          <div className="clearfix">
            <Button color="primary" size="large" onClick={() =>  setOpenModal(true) }>
              Edit
            </Button>
            &nbsp;
            <Button color="danger" size="large" onClick={handleDelete}>
              Delete
            </Button>
            &nbsp;
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CourseEntry;