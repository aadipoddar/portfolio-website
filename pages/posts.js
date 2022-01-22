import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbBoxSlide from '../public/images/contents/Box SLide Animation.png'
import thumbGlassGlow from '../public/images/contents/Glass Glow.png'
import thumbTeslaCar from '../public/images/contents/Tesla Car.png'
import thumbGlitch from '../public/images/contents/Glitch.png'
import thumbCards from '../public/images/contents/Cards.png'
import thumbRing from '../public/images/contents/Rings.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Box Slide Animation"
            thumbnail={thumbBoxSlide}
            href="https://www.instagram.com/p/CU0KPRwBGjb"
          />

          <GridItem
            title="Glass Glow Animation"
            thumbnail={thumbGlassGlow}
            href="https://www.instagram.com/p/CU0J79uhAf6/"
          />

        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Tesla Car Animation"
            thumbnail={thumbTeslaCar}
            href="https://www.instagram.com/p/CUzBxIPgQeO"
          />

          <GridItem
            title="Glitch Animation"
            thumbnail={thumbGlitch}
            href="https://www.instagram.com/p/CUuAP-UAvHn"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Cards Animation"
            thumbnail={thumbCards}
            href="https://www.instagram.com/p/CUz28wsg-7U"
          />
          <GridItem
            title="Rings Animation"
            thumbnail={thumbRing}
            href="https://www.instagram.com/p/CUz24cQAeL-"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
