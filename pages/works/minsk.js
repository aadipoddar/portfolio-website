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
  <Layout title="Minsk">
    <Container>
      <Title>
        Minsk <Badge>2021 - 2022</Badge>
      </Title>
      <P>
        Minsk, a handwritten compiler in C#. It illustrates basic concepts of compiler construction and how one can tool the language inside of an IDE by exposing APIs for parsing and type checking.
        This compiler uses many of the concepts that you can find in the Microsoft C# and Visual Basic compilers.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, Linux, iOS</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>C#</span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/aadipoddar/minsk">
            github/minsk <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Photos</Center>
      </Heading>

      <WorkImage src="/images/works/minsk-2.png" alt="Minsk" />
      <WorkImage src="/images/works/minsk-3.png" alt="Minsk" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
