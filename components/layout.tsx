import styles from './layout.module.css'
import Header from './header'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className={styles.main}>
        <Header/>
        {children}
      </main>
    </>
  )
}
