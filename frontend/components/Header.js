import React, { useState } from 'react';
import {APP_NAME} from  '../config'
import Link from 'next/link'
import {signout,isAuth} from '../actions/auth'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink>{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link href="/signin">
                <NavLink>
                  Signin
                </NavLink>
              </Link> 
            </NavItem>
            <NavItem>
              <Link href="/signup">
                <NavLink>
                  Signup
                </NavLink>
              </Link> 
            </NavItem>
            {isAuth() && (
              <NavItem>
                <Link href="/signout">
                  <NavLink>
                    Sign Out
                  </NavLink>
                </Link> 
              </NavItem>
            ) }
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;