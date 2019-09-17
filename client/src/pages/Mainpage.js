import React, {Component} from 'react';
import {Page} from '../components/common';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../scss/Mainpage.scss'
import {inject, observer} from "mobx-react";



@inject('main_page')
@observer
class Mainpage extends Component {

    componentDidMount(){
        //Todo 회원 부서정보 가져와서 loadMajorList 파라미터로!
        this.props.main_page.loadMajorList("부산대학교 정보컴퓨터공학부")
    }

    render() {
        const { main_page } = this.props;

        return (
            <Page>
                <Grid container spacing={40} className="cardGrid">
                    {main_page.majorList
                        .map(test => (
                        <Grid item key={test.id} xs={12} md={6}>
                            <Card className="card">
                                <div className="cardDetails">
                                    <CardContent>
                                        <Typography component="h2" variant="h5">
                                            {test.major}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {test.fintech_use_num}
                                        </Typography>
                                        <Typography variant="subtitle1" paragraph>
                                            {test.body}
                                        </Typography>
                                        <Typography variant="subtitle1" color="primary" onClick={main_page.detailClickHandler}>
                                            자세히보기
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Page>
        );
    }
};

export default Mainpage;