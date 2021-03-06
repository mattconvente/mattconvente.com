import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Contact &mdash; Matt Convente</title>
      </Head>
      <section>
        <h2>Contact</h2>
        <p>
          Contact Matt Convente.
        </p>
      </section>
    </>
  )
}

export default Contact

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
