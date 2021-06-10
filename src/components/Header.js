import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" light expand="md">
      <NavbarBrand style={{color: "lightgrey"}}  tag={Link} to="/">Code.Hub Dashboard</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar />
        <NavItem style={{listStyle: "none"}}> 
          <NavLink tag={Link} to="/courses" style={{color: "darkgrey"}}>Courses</NavLink>
        </NavItem>
        <NavItem style={{listStyle: "none"}}>
          <NavLink tag={Link} to="/add-course" style={{color: "darkgrey"}}>Add new course</NavLink>
        </NavItem>
      </Collapse>
    </Navbar>
  );
};

export default Header;
