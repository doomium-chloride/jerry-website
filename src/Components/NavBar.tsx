import React from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    makeStyles,
    createStyles,
    Theme,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            flexGrow: 1,
            justifyItems: 'center',
            justifyContent: 'center',
        },
        menuButton: {
            marginRight: '10%',
        },
    })
);

export default function NavBar() {
    return (
        <AppBar position={'sticky'}>
            <Toolbar>
                <Button>Home</Button>
                <Button>Something else</Button>
                <Button href={'https://www.instagram.com/jma_fitness/'}>
                    Fitness Instagram <InstagramIcon />
                </Button>
                <Button href={'https://www.instagram.com/jma_apparel/'}>
                    Apparel Instagram <InstagramIcon />
                </Button>
            </Toolbar>
        </AppBar>
    );
}
