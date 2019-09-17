import React, {Component} from 'react';
import {Page} from '../components/common';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../scss/Mainpage.scss'


const TestData = [
    {
        id:1,
        major: "정보컴퓨터공학부",
        body: "기타등등",
        date : '2019-09-11'
    },
    {
        id:2,
        major: "전기공학과",
        body: "기타등등",
        date : '2019-09-11'
    }
]

class Mainpage extends Component {
    render() {
        return (
            <Page>
                <Grid container spacing={40} className="cardGrid">
                    {TestData.map(test => (
                        <Grid item key={test.id} xs={12} md={6}>
                            <Card className="card">
                                <div className="cardDetails">
                                    <CardContent>
                                        <Typography component="h2" variant="h5">
                                            {test.major}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {test.date}
                                        </Typography>
                                        <Typography variant="subtitle1" paragraph>
                                            {test.body}
                                        </Typography>
                                        <Typography variant="subtitle1" color="primary">
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