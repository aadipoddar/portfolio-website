import { Container, Badge, Link, List, ListItem, Heading, Center } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Hazel">
    <Container>
      <Title>
        Hazel <Badge>2022-</Badge>
      </Title>
      <P>
        Hazel is primarily an early-stage interactive application and rendering engine for Windows.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>

        <ListItem>
          <Meta>STACK</Meta>
          <span>C / C++</span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/aadipoddar/Hazel" target="_blank">
            github/Hazel <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Photos</Center>
      </Heading>

      <WorkImage src="/images/works/Hazel_1.png" alt="Hazel" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
