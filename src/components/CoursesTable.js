import React from "react";
import { Table } from 'reactstrap';
import { Button } from "reactstrap";
import { img } from 'react';

const CoursesTable = ({title, open, price, dates}) => {
  return (
    <tr>
      <td><img style={{width: 20, height: 20}}src="https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png" alt="info" /></td>
      <td>{title}</td>
      <td>{open ? '✓' : 'X'}</td>
      <td>{price.normal} €</td>
      <td>{dates.start_date} - {dates.end_date}</td>
      <td><Button color="info">View details</Button></td>
    </tr>   
  );
};

export default CoursesTable;
