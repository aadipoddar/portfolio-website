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
                    <Meta>Source</Meta>
                    <Link href="https://github.com/aadipoddar/WhatsAppAndroidStudio">
                        github/whatsapp <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Android</span>
                </ListItem>

                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Java, XAML, Firebase</span>
                </ListItem>
            </List>

            <Box align="center" my={6}>
                <Link
                    className="link-appstore"
                    href="https://objects.githubusercontent.com/github-production-release-asset-2e65be/401710347/0ef2d3d9-850b-4226-9ec5-c25105f5a3fd?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20220122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220122T123324Z&X-Amz-Expires=300&X-Amz-Signature=da1a27893028c515aae641cf49f474f29f3cdaa6bb63880ee6b7f4f696d12fed&X-Amz-SignedHeaders=host&actor_id=83405769&key_id=0&repo_id=401710347&response-content-disposition=attachment%3B filename%3Dapp-release.apk&response-content-type=application%2Fvnd.android.package-archive"
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
