import {
    Box,
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Image,
    Heading,
    Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="Tinder">
        <Container>
            <Title>
                Tinder <Badge>2022</Badge>
            </Title>
            <P>
                A Tinder clone in React Native using Expo and Firebase.
            </P>
            <P>
                - Sign in and user state by Google Auth
                - Swipe profiles for a MATCH or a PASS
                - Get matched with a user
                - Realtime Chat with mathced users
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Android, Web, iOS</span>
                </ListItem>

                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React Native, Expo, JavaScript</span>
                </ListItem>

                <ListItem>
                    <Meta>Download</Meta>
                    <Link href="https://github.com/aadipoddar/tinder-expo/releases/tag/v1" target="_blank">
                        Download Apk <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/aadipoddar/tinder-expo" target="_blank">
                        github.com/Tinder <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <Box align="center" my={6}>
                <Link
                    className="link-appstore"
                    href="https://expo.dev/@aadipoddar/tinder-expo"
                    target="_blank"
                >
                    <Image
                        maxW={240}
                        src="/images/works/expo-logo.png"
                        className="image-appstore"
                        alt="Try App Demo"
                    />
                </Link>
            </Box>

            <Heading as="h4" fontSize={16} my={6}>
                <Center>Photos</Center>
            </Heading>

            <WorkImage src="https://user-images.githubusercontent.com/83405769/155358779-cde1ba37-95eb-4ae4-82dc-be141a1552d2.png" alt="Tinder" />
            <WorkImage src="https://user-images.githubusercontent.com/83405769/155359068-afa4cbac-7b37-47b4-a744-b0a2481fee44.png" alt="Tinder" />
            <WorkImage src="https://user-images.githubusercontent.com/83405769/155359151-a78c2900-6b65-4c45-8a45-58687a77bd91.png" alt="Tinder" />
            <WorkImage src="https://user-images.githubusercontent.com/83405769/155359423-70a74984-891d-45a2-8211-28fd1302cfef.png" alt="Tinder" />
            <WorkImage src="https://user-images.githubusercontent.com/83405769/155359472-392fed1b-6df6-49f1-9996-c184e4d94b52.png" alt="Tinder" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
