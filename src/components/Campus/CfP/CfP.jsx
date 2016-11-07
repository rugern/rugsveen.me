import React from 'react';
import path from 'path';
import {
    Appear,
    Code,
    CodePane,
    Deck,
    Heading,
    Image,
    Link,
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
    secondary: '#FFFFFF',
}, {
    primary: 'noyh',
    secondary: 'planer',
});

const images = {
    personalia: require('./images/personalia.png'),
    comment: require('./images/comment.png'),
    another_personalia: require('./images/another_personalia.png'),
    passion: require('./images/passion.png'),
    role: require('./images/role.png'),
    statistics: require('./images/statistics.png'),
};
preloader(images);

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
            <Deck transition={['zoom', 'slide']} transitionDuration={500}>

            <Slide transition={['zoom']}>
            <Heading>Call for Papers</Heading>
            <Text>Og litt om hva det innebærer</Text>
            </Slide>

            <Slide>
            <Heading>Eksempel: Booster Conf</Heading>
            </Slide>

            <Slide>
            <Heading>Presentasjoner</Heading>
            <List>
            <Appear><ListItem>Workshop</ListItem></Appear>
            <Appear><ListItem>Short talks</ListItem></Appear>
            <Appear><ListItem>Lightning talks</ListItem></Appear>
            </List>
            </Slide>

            <Slide>
            <Heading>Workshop</Heading>
            <Appear>
                <Text>Praktisk arbeid</Text>
            </Appear>
            <Appear>
                <Text>1.5 - 4.5 timer</Text>
            </Appear>
            <Appear>
                <Text>"Hovedattraksjon"</Text>
            </Appear>
            </Slide>

            <Slide>
            <Heading>Short talks</Heading>
            <Appear>
                <Text>Gjennomgang av praktisk erfaring eller story-telling</Text>
            </Appear>
            <Appear>
                <Text>30 minutter</Text>
            </Appear>
            <Appear>
                <Text>"If you are unsure that your short talk is excellent, you will want to submit either a lightning talk or a workshop instead." -- Booster Conf</Text>
            </Appear>
            </Slide>

            <Slide>
            <Heading>Lightning talks</Heading>
            <Appear>
                <Text>Innsikt, idé eller vise entusiasme</Text>
            </Appear>
            <Appear>
                <Text>10 minutter</Text>
            </Appear>
            <Appear>
                <Text>Konsentrert og veløvd</Text>
            </Appear>
            </Slide>

            <Slide>
                <Heading>Rask titt på nødvendig info</Heading>
            </Slide>

            <Slide bgColor="secondary">
            <Image src={images.personalia} margin="0px auto 40px" height='600px'/>
            </Slide>

            <Slide bgColor="secondary">
            <Image src={images.role} margin="0px auto 40px" height='600px'/>
            </Slide>

            <Slide bgColor="secondary">
            <Image src={images.passion} margin="0px auto 40px" height='600px'/>
            </Slide>

            <Slide bgColor="secondary">
            <Image src={images.passion} margin="0px auto 40px" height='600px'/>
            <Image src={images.comment} margin="0px auto 40px" width='1000px'/>
            </Slide>

            <Slide bgColor="secondary">
            <Image src={images.another_personalia} margin="0px auto 40px" height='600px'/>
            </Slide>

            <Slide bgColor="secondary">
            <Image src={images.statistics} margin="0px auto 40px" width='1000px'/>
            </Slide>

            <Slide>
                <Heading>Spørsmål?</Heading>
            </Slide>

            <Slide>
                <Heading>Oppgaver</Heading>
                <List ordered start={1} type="1">
                    <ListItem>Finn et tema du kunne tenkt deg å snakke om</ListItem>
                    <ListItem>Skriv abstraktet ditt</ListItem>
                    <ListItem>Finn tittel på presentasjonen</ListItem>
                </List>
            </Slide>

            </Deck>
            </Spectacle>
        );
    }
}
