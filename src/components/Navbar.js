import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap";
import './profile.css'
const NavBar = () => {
    return (
        <Navbar className='nav1' collapseOnSelect expand="lg" bg="dark" variant="dark">
          <LinkContainer to='/'>
        <Navbar.Brand >
           CUVETTE
                </Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="mr-auto">
           
           
          <Link className='Link' to='add-job'>  ADD JOB</Link>
              
           
          </Nav>
          <Nav className='nav'>
            <Link className='Link' to='/'>My Listings</Link>
            <Link className='Link' eventKey={2} to="#">
           
            <NotificationsIcon />
             
              
            </Link>
            <Link className='Link' eventKey={2} to='/profile'>
          
            <AccountCircleIcon />
              
            
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar
