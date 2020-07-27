import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import { Title } from 'react-admin';

var config = require('../config.json');


export const Dashboard = () => {
    return (
    <Card>
        <Title title="Welcome Open-Xchange Administration Panel" />
        <CardContent><h2>Welcome to OX Administration Panel</h2>
            <h3>DNS set up</h3>
            <h4>MX</h4>
            yourdomain.tld.	MX	10 mx001.domain.tld <br></br> 
            yourdomain.tld.	MX	10 mx002.domain.tld <br></br>
            yourdomain.tld.	MX	10 mx003.domain.tld <br></br>
            yourdomain.tld.	MX	10 mx004.domain.tld <br></br>
            <h4>SPF</h4>
            yourdomain.tld.	TXT	'v=spf1 include:spf.domain.tld ~all' 
            <h4>DKIM</h4>
            Coming soon...
        </CardContent>
        <CardContent><b>Click in the button below access OX</b></CardContent>
        <CardActions>
            <Button href={ config.WEB_URL + "/appsuite"}>
                    <HomeIcon style={{ paddingRight: '0.5em' }} />
                    Access Webmail
            </Button>
            <Button href={ config.API_URL }>
                    <CodeIcon style={{ paddingRight: '0.5em' }} />
                    REST API
            </Button>
        </CardActions>
    </Card>

);
};