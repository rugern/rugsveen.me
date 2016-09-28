import React from 'react';
import {
    Appear,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    ListItem,
    List,
    Slide,
    Spectacle,
    Text,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

const theme = createTheme({
    primary: '#1FBCD2',
    secondary: '#FC5830',
}, {
    primary: 'noyh',
    secondary: 'planer',
});

const images = {
};
preloader(images);


export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={['zoom', 'slide']} transitionDuration={500}>
                    <Slide transition={['zoom']}>
                        <Heading>Hello world!</Heading>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
