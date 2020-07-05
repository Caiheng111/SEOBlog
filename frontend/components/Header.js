import React, { useState } from 'react';
import {APP_NAME} from  '../config'
import Link from 'next/link'
import Router from 'next/router';
import NProgress from 'nprogress';
import {signout,isAuth} from '../actions/auth'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

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
                  <NavLink style={{ cursor: 'pointer' }} onClick={SignOut}>
                    Sign Out
                  </NavLink>
              </NavItem>
            ) }

            {isAuth() && isAuth().role ===0 &&(
              <NavItem>
                <Link href='/user'>
                <NavLink>
                    {`${isAuth().name}'s Dashboard`}
                  </NavLink>
                </Link>   
              </NavItem>
            ) }

            {isAuth() && isAuth().role ===1 &&(
              <NavItem>
                <Link href='/admin'>
                <NavLink>
                    {`${isAuth().name}'s Dashboard`}
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