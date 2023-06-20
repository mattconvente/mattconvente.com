import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'

const Work: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Work &mdash; Matt Convente</title>
      </Head>
      <section>
        <h2>Work</h2>
        <p>
          The work of Matt Convente.
        </p>
      </section>
    </>
  )
}

export default Work

Work.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
