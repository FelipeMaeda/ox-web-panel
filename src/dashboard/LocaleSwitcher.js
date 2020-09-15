import * as React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useLocale, useSetLocale, useTranslate } from 'react-admin';

const LocaleSwitcher = () => {
    const locale = useLocale();
    const setLocale = useSetLocale();
    const translate = useTranslate();
    return (
        <Card variant="outlined">
            <CardContent>           
                <Typography gutterBottom variant="h5" component="h2">
                    {translate('general.language')}
                </Typography>
                <CardActions>
                    <Button 
                        disabled={locale === 'pt'}
                        onClick={() => setLocale('pt')}
                    >
                        Português
                    </Button>
                    <Button
                        disabled={locale === 'en'}
                        onClick={() => setLocale('en')}
                    >
                        English
                    </Button>
                    <Button
                        disabled={locale === 'es'}
                        onClick={() => setLocale('es')}
                    >
                        Spanish
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default LocaleSwitcher;