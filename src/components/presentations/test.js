import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme} history={hashHistory}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500}>
                    <Slide transition={["zoom"]} bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1} textColor="black">
                            Spectacle
                        </Heading>
                        <Heading size={1} fit caps>
                            A ReactJS Presentation Library
                        </Heading>
                        <Heading size={1} fit caps textColor="black">
                            Where You Can Write Your Decks In JSX
                        </Heading>
                    </Slide>
                    <Slide>
                        <Heading>Hvis du kan se dette funker det</Heading>
                    </Slide>
                </Deck>
            </Spectacle>
        )};
};
