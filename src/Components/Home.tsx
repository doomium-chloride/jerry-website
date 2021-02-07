import React from 'react';
import { Typography } from '@material-ui/core';
import { TransitionGroup } from 'react-transition-group';
import ScrollAnimation from 'react-animate-on-scroll';

const offset = 150;

export default function Home() {
    return (
        <div>
            <ScrollAnimation
                animateIn={'animate__fadeInRight'}
                animateOut={'animate__fadeOutLeft'}
                offset={offset}
            >
                <Typography variant={'h1'}>Test</Typography>
                <Typography variant={'h1'}>Testing</Typography>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn={'animate__fadeInRight'}
                animateOut={'animate__fadeOutLeft'}
                offset={offset}
            >
                <Typography variant={'h1'}>Test</Typography>
                <Typography variant={'h1'}>Testing</Typography>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn={'animate__fadeInRight'}
                animateOut={'animate__fadeOutLeft'}
                offset={offset}
            >
                <Typography variant={'h1'}>Test</Typography>
                <Typography variant={'h1'}>Testing</Typography>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn={'animate__fadeInRight'}
                animateOut={'animate__fadeOutLeft'}
                offset={offset}
            >
                <Typography variant={'h1'}>Test</Typography>
                <Typography variant={'h1'}>Testing</Typography>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn={'animate__fadeInRight'}
                animateOut={'animate__fadeOutLeft'}
                offset={offset}
            >
                <Typography variant={'h1'}>Test</Typography>
                <Typography variant={'h1'}>Testing</Typography>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn={'animate__fadeInRight'}
                animateOut={'animate__fadeOutLeft'}
                offset={offset}
            >
                <Typography variant={'h1'}>Test</Typography>
                <Typography variant={'h1'}>Testing</Typography>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn={'animate__fadeInRight'}
                animateOut={'animate__fadeOutLeft'}
                offset={offset}
            >
                <Typography variant={'h1'}>Test</Typography>
                <Typography variant={'h1'}>Testing</Typography>
            </ScrollAnimation>
        </div>
    );
}
