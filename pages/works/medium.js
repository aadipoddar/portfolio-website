import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Medium">
    <Container>
      <Title>
        Medium <Badge>2022</Badge>
      </Title>
      <P>
        Medium is a platform where you can post stuff and others can comment on it giving their feedback.
      </P>
      <P>
        This service is currently under development. It&apos;s initial version is complete looking forward to add new stuff.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>TypeScript, Sanity</span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/aadipoddar/medium-nextjs" target="_blank">
            github/medium
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Photos</Center>
      </Heading>

      <WorkImage src="/images/works/medium-2.png" alt="Medium Homepage" />
      <WorkImage src="/images/works/medium-1.png" alt="Medium Comment Section" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
