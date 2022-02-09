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
  <Layout title="TODO">
    <Container>
      <Title>
        TODO <Badge>2022</Badge>
      </Title>
      <P>
        A Simple TODO App made with React Native and Expo. It is highly animated
        and has both dark and light theme support.
      </P>
      <P>
        You will never forget to complete your tasks if you start using the App.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android, Web, iOS</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Expo, Moti, TypeScript</span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/aadipoddar/react-native-animated-todo" target="_blank">
            github.com/TODO <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://expo.dev/@aadipoddar/animated-todo"
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

      <WorkImage src="/images/works/Todo-1.jpg" alt="TODO" />
      <WorkImage src="/images/works/Todo-2.jpg" alt="TODO" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
