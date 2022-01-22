import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbHazel from '../public/images/works/Hazel-Logo.png'
import thumbMedium from '../public/images/works/medium-logo.png'
import thumbSnapchat from '../public/images/works/Snapchat-Logo.png'
import thumbTodo from '../public/images/works/TODO-logo.png'
import thumbMinsk from '../public/images/works/minsk-logo.jpg'
import thumbNode from '../public/images/works/Node-Editor-Logo.jpg'
import thumbWhatsapp from '../public/images/works/Whatsapp-Logo.jpg'
import thumbGoogle from '../public/images/works/google-logo.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="hazel" title="Hazel" thumbnail={thumbHazel}>
            A Game Engine to Build Realistic Games
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="minsk" thumbnail={thumbMinsk} title="Minsk">
            TMinsk, a handwritten compiler in C#.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="whatsapp" thumbnail={thumbWhatsapp} title="WhatsApp">
            A WhatsApp Clone
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="snapchat" title="Snapchat" thumbnail={thumbSnapchat}>
            A Snapcat clone in React and Firebase
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="google" thumbnail={thumbGoogle} title="Google">
            A Google Clone
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="todo" thumbnail={thumbTodo} title="TODO">
            A simple TODO App, Highly Animated!
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem id="medium" title="Medium" thumbnail={thumbMedium}>
            Medium Clone in Next JS and Sanity
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem id="node-editor" thumbnail={thumbNode} title="Node Editor">
            A Node Editor in Python
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
