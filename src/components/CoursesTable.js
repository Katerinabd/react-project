  
import React from "react";
import { Link } from "react-router-dom";
import { Table, Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button, } from "reactstrap";

const CoursesTable = ({ courses }) => {
  return (
    <Card className="m-top">
      <CardHeader>Last 5 courses</CardHeader>
      <CardBody className="no-padding">
        <Table>
          <thead>
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
            {courses.map(({ id, title, open, price, dates }) => (
              <tr key={id}>
                <td><img style={{width: 20, height: 20}}src="https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png" alt="info" /></td>
                <td>{title}</td>
                <td>{open ? "✓" : "X"}</td>
                <td>{price.normal} €</td>
                <td>
                  {new Date(dates.start_date).toLocaleDateString("el-gr")} - {new Date(dates.end_date).toLocaleDateString("el-gr")}
                </td>
                <td>
                  <Button tag={Link} to={`/courses/${id}`} color="info">
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <CardFooter className="clearfix">
          <Button
            tag={Link}
            to="/courses"
            color="primary"
            className="float-right"
          >
            View All
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
};
export default CoursesTable;