import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Google">
        <Container>
            <Title>
                Google <Badge>2021</Badge>
            </Title>

            <P>
                A Google Clone Made with React as Frontend and Goole Search API powered by rapidapi.
                It has been hosted with Netify. It works exactly as Google Search with a powerful Search API.
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://google-search-react-aadi.netlify.app/">
                        Google Clone <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/aadipoddar/google_react_clone">
                        github/google <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>

                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, JavaScript, Netify</span>
                </ListItem>
            </List>

            <Heading as="h4" fontSize={16} my={6}>
                <Center>Photos</Center>
            </Heading>

            <WorkImage src="/images/works/Google-1.png" alt="Google" />
            <WorkImage src="/images/works/Google-2.png" alt="Google" />
            <WorkImage src="/images/works/Google-3.png" alt="Google" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
