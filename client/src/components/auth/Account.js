import React, { Component } from 'react';

import { inject, observer} from 'mobx-react';

import { Row, Col, Form, FormGroup, Label, Input, CardFooter, Button,
    Card, CardTitle
} from 'reactstrap';

@inject('auth')
@observer
class Account extends Component {
    render() {
        const { auth,  auth_code } = this.props;

    
        const SuccessAccountView = (
            <Card body>
                <CardTitle className="h4">계좌 인증</CardTitle>
                <hr />
                <Form>
                    <FormGroup row>
                        <Label for="accountReg" style={{textAlign:'center' }}>계좌가 인증 되었습니다.</Label>
                        
                    </FormGroup>
                </Form>
                <CardFooter>
                    <Button block outline color="primary"
                        onClick={auth.registerPinnumber.bind(this, auth_code)}>
                            확인
                    </Button>
                </CardFooter>
            </Card>
        )
    
        return (
            <Row className="text-center" style={{justifyContent: 'center'}}>
                <Col sm={4}>
                    {SuccessAccountView}
                </Col> 
            </Row>
        );
    }
};

export default Account;