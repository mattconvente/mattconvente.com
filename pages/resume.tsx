import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'

const Resume: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Resume &mdash; Matt Convente</title>
      </Head>
      <section>
        <h2>Resume</h2>
        <p>
          Resume of Matt Convente.
        </p>
      </section>
    </>
  )
}

export default Resume

Resume.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
