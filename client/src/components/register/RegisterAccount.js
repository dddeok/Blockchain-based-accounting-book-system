import React, { Component } from 'react';

import { inject, observer} from 'mobx-react';

import { Row, Col, Form, FormGroup, Label, Input, CardFooter, Button,
    Card, CardTitle
} from 'reactstrap';

@inject('auth')
@observer
class RegisterAccount extends Component {
    render() {
        const { auth, mode } = this.props;


        const registerAccountView = (
            <Card body>
                <CardTitle className="h4">계좌 등록</CardTitle>
                <hr />
                <Form>
                    <FormGroup row>
                        <Label for="usernameAccount" sm={3}>이름</Label>
                        <Col sm={9}>
                            <Input type="text" id="usernameAccount" autoFocus/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="yearNumber" sm={3}>생년월일</Label>
                        <Col sm={9}>
                            <Input type="number" id="yearNumber"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="bank" sm={3}>은행</Label>
                        <Col sm={9}>
                            <Input type="text" id="bank"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="accountNumber" sm={3}>계좌번호</Label>
                        <Col sm={9}>
                            <Input type="number" id="accountNumber"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="company" sm={3}>통신사</Label>
                        <Col sm={9}>
                            <Input type="text" id="company"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="phoneNumber" sm={3}>휴대폰 번호</Label>
                        <Col sm={9}>
                            <Input type="number" id="phoneNumber"/>
                        </Col>
                    </FormGroup>
                </Form>
                <CardFooter>
                    <Button block outline color="primary">
                            계좌등록
                    </Button>
                </CardFooter>
            </Card>
        )
        return (
            <Row className="text-center" style={{justifyContent: 'center'}}>
                <Col sm={4}>
                    {registerAccountView}
                </Col> 
            </Row>
        );
    }
};

export default RegisterAccount;