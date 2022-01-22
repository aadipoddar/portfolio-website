import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Node Editor">
    <Container>
      <Title>
        Node Editor <Badge>2021 - 2022</Badge>
      </Title>
      <P>
        A Node Editor like Blueprints use in Unreal Engine and Blender.
        It is very fluent and can be used in Game Engines with some minor tweeks.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, iOS, Linux</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Phython, Qt</span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/aadipoddar/NodeEditor">
            github/node-editor <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Photos</Center>
      </Heading>

      <WorkImage src="/images/works/Node-Editor-1.png" alt="Node-Editor" />
      <WorkImage src="/images/works/Node-Editor-2.png" alt="Node-Editor" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
