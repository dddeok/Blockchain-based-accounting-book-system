import React, {Component} from 'react';

import {Page} from '../components/common';


import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { observer, inject } from 'mobx-react';

@inject('main_page')
@observer
class InformationPage extends Component {
    
    render() {
        const { main_page } = this.props;

        return (
            <Page>
                <Grid container spacing={40} className="cardGrid">
                    {main_page.detailsList
                        .map(test => (
                        <Grid item key={test.id} xs={12} md={12}>
                            <Card className="card">
                                <div className="cardDetails">
                                    <CardContent>
                                        <Typography component="h2" variant="h5">
                                            {test.date}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {test.body}
                                        </Typography>
                                        <Typography variant="subtitle1" paragraph>
                                            {test.price}
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

export default InformationPage;