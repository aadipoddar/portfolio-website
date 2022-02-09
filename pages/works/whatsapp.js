import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Center,
    Box,
    Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="WhatsApp">
        <Container>
            <Title>
                WhatsApp <Badge>2021</Badge>
            </Title>

            <P>
                A WhatsApp Clone Made with Java and Firebase as Backend Database and Authentication using Android Stdio.
                It is Great app for chatting seamlessly with Friends and Family.
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Android</span>
                </ListItem>

                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Java, XAML, Firebase</span>
                </ListItem>

                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/aadipoddar/WhatsAppAndroidStudio" target="_blank">
                        github/whatsapp <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <Box align="center" my={6}>
                <Link
                    className="link-appstore"
                    href="https://github.com/aadipoddar/WhatsAppAndroidStudio/releases/download/v1.0/app-release.apk"
                    target="_blank"
                >
                    <Image
                        maxW={240}
                        src="/images/works/Whatsapp-Logo.jpg"
                        className="image-appstore"
                        alt="Try App Demo"
                    />
                </Link>
            </Box>

            <Heading as="h4" fontSize={16} my={6}>
                <Center>Photos</Center>
            </Heading>

            <WorkImage src="/images/works/WhatsApp-1.jpg" alt="WhatsApp" />
            <WorkImage src="/images/works/WhatsApp-2.jpg" alt="WhatsApp" />
            <WorkImage src="/images/works/WhatsApp-3.jpg" alt="WhatsApp" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
