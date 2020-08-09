import * as React from 'react';
import { Card, CardActions, CardContent, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


var config = require('../config.json');

export const MX = () => {
    return (
        <Card variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Configure your domain's MX
          </Typography>
          <Paper>yourdomain.tld.    MX	10 mx001.{ config.DEFAULT_DOMAIN }</Paper> 
          <Paper>yourdomain.tld.   	MX	10 mx002.{ config.DEFAULT_DOMAIN }</Paper>
          <Paper>yourdomain.tld.   	MX	10 mx003.{ config.DEFAULT_DOMAIN }</Paper>
          <Paper>yourdomain.tld.   	MX	10 mx004.{ config.DEFAULT_DOMAIN }</Paper> 
        </CardContent>
        <CardActions>
          <Button href="https://www.antispam.br/admin/spf" size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
};

export const SPF = () => {
    return (
        <Card variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            It's good to keep SPF and DKIM configured too
          </Typography>
          <Typography variant="body2" component="p">
            <b>spf record:</b><br></br>
            <Paper>
                yourdomain.tld.	TXT	'v=spf1 include:spf.{ config.DEFAULT_DOMAIN } ~all' 
            </Paper>
          </Typography>
          <Typography variant="body2" component="p">
           <br></br><b>dkim records:</b><br></br>
            Will be available (and required!) soon... 
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="https://www.antispam.br/admin/dkim" size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
};

