import React, { useState } from 'react';
import {APP_NAME} from  '../config'
import Link from 'next/link'
import Router from 'next/router';
import {signout,isAuth} from '../actions/auth'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const SignOut=()=>{
    signout(()=>{
      Router.push(`/signin`)
    })
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink>{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            {!isAuth() && (
              <>
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
              </>
            )}
            
            {/* {JSON.stringify(isAuth())} */}
            {isAuth() && (
              <NavItem>
                  <NavLink style={{cursor:'pointer'}} onClick={SignOut}>
                    Sign Out
                  </NavLink>
              </NavItem>
            ) }
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;