import React, { Component } from 'react';

import { inject, observer} from 'mobx-react';

import { Row, Col, Form, FormGroup, Label, Input, CardFooter, Button,
    Card, CardTitle
} from 'reactstrap';

@inject('auth')
@observer
class Auth extends Component {
    render() {
        const { auth, mode } = this.props;

        const loginView = (
            <Card body>
                <CardTitle className="h4">로그인</CardTitle>
                <hr />
                <Form>
                    <FormGroup row>
                        <Label for="email" sm={3}>이메일</Label>
                        <Col sm={9}>
                            <Input type="email" id="email"
                                value={auth.email} onChange={auth.changeEmail} autoFocus
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={3}>비밀번호</Label>
                        <Col sm={9}>
                            <Input type="password" id="password"
                                value={auth.pswd} onChange={auth.changePassword} onKeyPress={auth.keyPressLogin}
                            />
                        </Col>
                    </FormGroup>
                </Form>
                <CardFooter>
                    <Button block outline color="primary" onClick={auth.loginSubmit}>
                        로그인
                    </Button>
                </CardFooter>
            </Card>
        )
        const registerView = (
            <Card body>
                <CardTitle className="h4">회원가입</CardTitle>
                <hr />
                <Form>
                    <FormGroup row>
                        <Label for="emailReg" sm={3}>이메일</Label>
                        <Col sm={9}>
                            <Input type="email" id="emailReg"
                                value={auth.emailReg} onChange={auth.changeEmailReg} autoFocus/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="unionname" sm={3}>소속</Label>
                        <Col sm={9}>
                            <Input type="unionname" id="unionname"
                                value={auth.union_nameReg} onChange={auth.changeUnionnameReg}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="passwordReg" sm={3}>비밀번호</Label>
                        <Col sm={9}>
                            <Input type="password" id="passwordReg"
                                value={auth.pswdReg} onChange={auth.changePasswordReg} onKeyPress={auth.keyPressRegister}/>
                        </Col>
                    </FormGroup>
                </Form>
                <CardFooter>
                    <Button block outline color="primary"
                        onClick={auth.registerSubmit}>
                            회원가입
                    </Button>
                </CardFooter>
            </Card>
        )
    
        return (
            <Row className="text-center" style={{justifyContent: 'center'}}>
                <Col sm={4}>
                    {mode === 'login' ? loginView : registerView}
                </Col> 
            </Row>
        );
    }
};

export default Auth;