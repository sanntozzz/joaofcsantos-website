import { About } from '@/components/Sections/About'
import { Education } from '@/components/Sections/Education'

import { Experience } from '@/components/Sections/Experience'
import { Footer } from '@/components/Sections/Footer'
import { Navigation } from '@/components/Sections/Navigation'
import { Skills } from '@/components/Sections/Skills'
import { GetStaticPropsContext } from 'next'

export default function Home() {
  return (
    <>
      <Navigation />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  }
}
