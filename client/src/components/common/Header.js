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
       console.log("====================Didmount")
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
                                        {auth.currentUser ?
                                            <>
                                            <DropdownItem onClick={auth.handleLogout}>로그아웃</DropdownItem>
                                            <DropdownItem tag={Link} to="/https://twww.open-platform.or.kr/apt/mobileweb/authorize?client_id=l7xx84bb5a92a3f9493eac00214e8b5a2ab4&response_type=code&lang=kor&edit_option=&scope=login+inquiry+transfer&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2FBankAPi%2Fhtml%2Fcallback.html&client_info=test+whatever+you+want&auth_type=0&bg_color=%23FAFAFA&txt_color=%23050505&btn1_color=%23006DB8&btn2_color=%23818487&invoke_type=ajax&sessionID=36d7c255-54fa-48d7-9e41-8551d4e216cb&action=Grant&api_tran_id=74c53cc8-2885-4487-934e-dd548ad8c25a&gw_svc_id=793ca84b51e6c631d339e5180897dc2b&gw_app_key=l7xx84bb5a92a3f9493eac00214e8b5a2ab4&scope=login inquiry transfer&redirect_uri=http://localhost:8080/BankAPi/html/callback.html&auth_type=0">계좌등록</DropdownItem>
                                            </>
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