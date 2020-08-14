import * as React from 'react';
import { Card, CardActions, CardContent, Button } from '@material-ui/core';
import { Home, Code } from '@material-ui/icons';
import { Title } from 'react-admin';
import Typography from '@material-ui/core/Typography';

var config = require('../config.json');

const Welcome = () => {
    return (
        <Card variant="outlined">
            <Title title="Welcome Open-Xchange Administration Panel" />
            <CardContent>           
                <Typography gutterBottom variant="h5" component="h2">
                    Welcome to OX Administration Panel
                </Typography>
                <CardActions>
                    <Button href={ config.WEB_URL + "/appsuite"}>
                            <Home style={{ paddingRight: '0.5em' }} />
                            Access Webmail
                    </Button>
                    <Button href={ config.API_URL }>
                            <Code style={{ paddingRight: '0.5em' }} />
                            REST API
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default Welcome;