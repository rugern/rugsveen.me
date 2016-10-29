import React from 'react';
import path from 'path';
import {
    Appear,
    Code,
    CodePane,
    Deck,
    Heading,
    Link,
    ListItem,
    List,
    Slide,
    Spectacle,
    Text,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
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
};
preloader(images);

const snippets = {
    primitives: require('raw!../../../../assets/snippets/flow/primitives.example'),
    syntax: require('raw!../../../../assets/snippets/flow/syntax.example'),
    builtin: require('raw!../../../../assets/snippets/flow/builtin.example'),
    other: require('raw!../../../../assets/snippets/flow/other.example'),
    aliases: require('raw!../../../../assets/snippets/flow/aliases.example'),
    functions: require('raw!../../../../assets/snippets/flow/functions.example'),
};


export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={['zoom', 'slide']} transitionDuration={500}>
                    <Slide transition={['zoom']}>
                        <Heading>Flow</Heading>
                        <Text>Give JS static types</Text>
                    </Slide>
                    <Slide>
                        <Heading>Some syntax</Heading>
                        <CodePane lang="js" source={snippets.syntax}/>
                    </Slide>
                    <Slide>
                        <Heading>Primitives</Heading>
                        <List>
                            <Appear>
                                <ListItem>boolean</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>number</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>string</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>null</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>void</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>any</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>mixed</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>(object literals)</ListItem>
                            </Appear>
                        </List>
                    </Slide>
                    <CodeSlide transition={[]} lang='js' code={snippets.primitives} ranges={[
                        { loc: [0, 1], title: 'A string' },
                        { loc: [0, 2], title: 'Still a string' },
                        { loc: [0, 3], title: 'Shit' },

                        { loc: [4, 5], title: 'Accepts anything' },
                        { loc: [4, 6] },
                        { loc: [4, 7] },
                        { loc: [4, 8] },

                        { loc: [9, 13], title: 'Let us define an object' },
                        { loc: [9, 14], title: 'So far, so good' },
                        { loc: [9, 15], title: 'Nope' },
                        { loc: [9, 16], title: 'Naww' },
                    ]}/>
                    <Slide>
                        <Heading>Built-in types</Heading>
                        <List>
                            <Appear>
                                <ListItem>Array</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Object</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Function</ListItem>
                            </Appear>
                        </List>
                    </Slide>
                    <CodeSlide transition={[]} lang='js' code={snippets.builtin} ranges={[
                        { loc: [0, 1], title: 'Arrays contain types as well' },
                        { loc: [0, 2] },
                        { loc: [0, 3] },

                        { loc: [4, 5], title: 'Built-in function type' },
                        { loc: [4, 6] },

                        { loc: [7, 8], title: 'Built-in object type' },
                        { loc: [7, 11] },
                    ]}/>
                    <Slide>
                        <Heading>Other types</Heading>
                        <List>
                            <Appear>
                                <ListItem>(Maps)</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Literal types (basically enums)</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>? (maybe type)</ListItem>
                            </Appear>
                        </List>
                    </Slide>
                    <CodeSlide transition={[]} lang='js' code={snippets.other} ranges={[
                        { loc: [0, 1], title: 'Key-value map' },
                        { loc: [0, 2] },
                        { loc: [0, 3] },
                        { loc: [0, 4] },

                        { loc: [5, 6], title: 'b has the type "Amedia"?!?!' },
                        { loc: [5, 7], title: 'Accepts only one value' },
                        { loc: [5, 8] },

                        { loc: [9, 10], title: 'Maybe type can be a value' },
                        { loc: [9, 11], title: 'or nothing' },
                        { loc: [9, 12] },
                        { loc: [9, 13], title: 'but not wrong type' },
                    ]}/>
                    <Slide>
                        <Heading>Type aliases</Heading>
                        <Text>While it is possible to say:</Text>
                        <Code>const myVar: string | number = otherVar</Code>
                        <Text>this quickly becomes unruly.</Text>
                        <Appear>
                            <Heading size={4}>That is why aliases are so useful!</Heading>
                        </Appear>
                    </Slide>
                    <CodeSlide transition={[]} lang='js' code={snippets.aliases} ranges={[
                        { loc: [0, 1], title: 'Union of types' },
                        { loc: [2, 7], title: 'or other more specific types' },
                        { loc: [0, 9], title: 'Lets get crazy' },
                    ]}/>
                    <CodeSlide transition={[]} lang='js' code={snippets.functions} ranges={[
                        { loc: [0, 2], title: 'Type everythaaing!' },
                    ]}/>
                    <Slide>
                        <Link href='https://github.com/facebook/flow/tree/master/lib' target='_blank'>"Third-party types"</Link>
                    </Slide>
                    <Slide>
                        <Heading>Conclusion?</Heading>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
