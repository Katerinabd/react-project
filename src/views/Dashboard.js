import React, { useState, useEffect } from "react";
import { Jumbotron, Button, Table, Row, Col } from "reactstrap";
import CoursesTable from '../components/CoursesTable';
import { fetchStats, fetchCourses } from '../api';
import {Card, CardText, CardTitle} from 'reactstrap';


const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetshData = async () => {
      const [responseStats, responseCourses] = await Promise.all([fetchStats(), fetchCourses()]);
      setStats(responseStats);
      setCourses(responseCourses);
    };

    fetshData();
  }, []);

  return (
    <div className="App">

      <Jumbotron>
        <h1 className="display-3">Welcome to Code.Hub Dashboard!</h1>
        <hr className="my-2" />
        <p>
          Manage everything and have fun!
        </p>
      </Jumbotron>

      <Row>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </Card>
      </Col>
    </Row>

      <Row>
        {stats.length > 0 &&
          stats.map(({ id, title, amount }) => (
            <Col key={id}>{title} {amount}!!!!</Col>
          ))}
      </Row>
      <Table>
        <thead>
          <tr>Last 5 Courses</tr>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Bookable</th>
            <th>Price</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((data) => <CoursesTable key={data.id} {...data} />)}
        </tbody>
      </Table>
      <Button color="primary">View All</Button>
    </div>
  );
};

export default Dashboard;
