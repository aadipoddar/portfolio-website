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
  <Layout title="Snapchat">
    <Container>
      <Title>
        Snapchat <Badge>2021</Badge>
      </Title>

      <P>
        A Snapchat Clone Made with React as Frontend and Firebase as Backend Database.
        It has been hosted with Firebase. It is a great app to share Pictures with Friends and Family.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://snapchat-react-877a2.web.app">
            Snapchat Clone <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/aadipoddar/snapchat-react">
            github/snapchat <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React, JavaScript, Firebase</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Photos</Center>
      </Heading>

      <WorkImage src="/images/works/snapchat-logo.png" alt="Snapchat" />
      <WorkImage src="/images/works/snapchat-1.png" alt="Snapchat Camera Page" />
      <WorkImage src="/images/works/snapchat-2.png" alt="Snapchat Send Page" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
