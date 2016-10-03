import React from 'react';
import {
    Appear,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
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

const images = {
    kitty: require('../assets/images/kitty.jpg'),
    birthday: require('../assets/images/birthday.jpg'),
    christine: require('../assets/images/christine.jpg'),
    mountain: require('../assets/images/mountain.jpg'),
    waterfall: require('../assets/images/waterfall.jpg'),
    askoy: require('../assets/images/askoy.jpg'),
};

preloader(images);

const theme = createTheme({
    primary: '#6A266F',
    secondary: '#FFFFFF',
}, {
    primary: 'noyh',
    secondary: 'planer',
});


export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={['slide']} transitionDuration={500}>
                    <Slide>
                        <Heading>Gratulerer med dagen!!</Heading>
                        <Appear>
                            <Heading size={3}>Pusen min</Heading>
                        </Appear>
                        <Appear>
                            <Image src={images.kitty} height="500px"/>
                        </Appear>
                    </Slide>

                    <Slide>
                        <Heading>Ooops, her er riktig pus</Heading>
                        <Image src={images.christine} height="500px"/>
                    </Slide>

                    <Slide>
                        <Heading>Vi har gjort mye gøy det siste året</Heading>
                        <List>
                            <Appear>
                                <ListItem>
                                     Feiret mange begivenheter sammen
                                     (nyttår, 17. mai, 30-årsdagen din...)
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Vært på sightseeing i Norge</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Inkludert Bjåen og Tuddal</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Kjøpt leilighet</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Og masse mer!</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide>
                        <Image src={images.askoy} height="500px"/>
                    </Slide>

                    <Slide>
                        <Image src={images.waterfall} height="500px"/>
                    </Slide>

                    <Slide>
                        <Image src={images.mountain} height="500px" transform="rotate(-90deg)"/>
                    </Slide>

                    <Slide>
                        <Image src={images.birthday} height="500px"/>
                    </Slide>

                    <Slide>
                        <Heading>
                            Og enda vi har hatt det bra skal det neste året bli
                            enda bedre!
                        </Heading>
                    </Slide>

                    <Slide>
                        <Heading>Men først skal du løse en gåte:</Heading>
                        <Appear>
                            <Text>Under bakken bak lås og slå finner du noe du har ventet på</Text>
                        </Appear>
                    </Slide>

                    <Slide>
                        <Heading>Neste gåte:</Heading>
                        <Appear>
                            <Text>
                                Høyt under taket hvor det er vanskelig å kikke,
                                i det grå finner du noe du kan drikke
                            </Text>
                        </Appear>
                    </Slide>

                    <Slide>
                        <Heading>Siste gåte:</Heading>
                        <Appear>
                            <Text>
                                Den gir noe vi kan gjøre sammen, men finnes bare
                                i det virtuelle. Går du litt videre skal jeg fortelle
                            </Text>
                        </Appear>
                    </Slide>

                    <Slide>
                        <Link href="assets/billetter.pdf" target="_blank">Klikk her</Link>
                    </Slide>

                    <Slide>
                        <Heading size={4}>
                            Denne dagen handler om deg, og jeg skal gjøre mitt
                            beste for å gjøre den så bra som mulig!
                        </Heading>
                        <Appear>
                            <Heading>Gratulerer med dagen, elsker deg</Heading>
                        </Appear>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
