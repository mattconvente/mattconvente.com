import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'

const Index: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home &mdash; Matt Convente</title>
      </Head>
      <section>
        <h2>Home</h2>
        <p>
          The website of Matt Convente.
        </p>
      </section>
    </>
  )
}

export default Index

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
