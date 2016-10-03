                            <Image src={images.kitty} height="300px"/>
export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={['slide']} transitionDuration={500}>
                <Slide>
                    <Heading>Gratulerer med dagen!!</Heading>
                    <Appear>
                        <Heading size={3}>Pusen min</Heading>
                        <Image src={images.kitty} height="300px"/>
                    </Appear>
                    <Appear>
                        <Heading size={3}>Uuups, feil pus</Heading>
                    </Appear>
                </Slide>
                <Slide>
                    <Heading>Denne pusen!</Heading>
                    <Image src={images.sweet} height="500px"/>
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
                    </List>
                </Slide>
                <Slide>
                    <Heading>Noen bilder fra det</Heading>
                    <Layout>
                        <Fill>
                            <Image src={images.newyears}/>
                        </Fill>
                        <Fill>
                            <Image src={images.nationalday}/>
                        </Fill>
                    </Layout>
                    <Layout>
                        <Fill>
                            <Image src={images.askoy}/>
                        </Fill>
                        <Fill>
                            <Image src={images.mountain}/>
                        </Fill>
                    </Layout>
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
                    <Link href="//localhost:3000/assets/billetter.pdf" target="_blank">Klikk her</Link>
                </Slide>
                <Slide>
                    <Heading size={3}>
                        Denne dagen handler om deg, og jeg skal gjøre mitt
                        beste for å gjøre den så bra som mulig!
                    </Heading>
                    <Heading>Gratulerer med dagen, elsker deg</Heading>
                </Slide>
            </Deck>
        );
    }
}
