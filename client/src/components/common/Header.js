import React, {Component} from 'react';

import '../../scss/Header.scss'

import { Link } from 'react-router-dom';
import {inject, observer} from 'mobx-react';

import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav,
    NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} 
    from 'reactstrap';

@inject('header')
@inject('auth')
@observer
class Header extends Component {
    componentDidMount(){
        this.props.auth.isLoggedIn()
    }
    render() {
        const { header } = this.props;
        const { auth } = this.props;
        return (
            <div className="header">
                <Navbar color="primary" dark expand="md">
                    <NavbarBrand tag={Link} to="/">학생회 장부</NavbarBrand>
                        <NavbarToggler onClick={header.toggleMenu} />

                        <Collapse isOpen={header.menuOpen} navbar>
                            <Nav className="ml-auto" color="white" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/">포스트</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        사용자 인증
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        {auth.currentUser._id ?
                                            <DropdownItem onClick={auth.handleLogout}>로그아웃</DropdownItem>
                                            :
                                            <>
                                            <DropdownItem tag={Link} to="/auth/login">로그인</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/auth/register">회원가입</DropdownItem>
                                            </>
                                        }
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                </Navbar> 
            </div>
        );
    }
};

export default Header;