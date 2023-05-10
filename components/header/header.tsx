import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">Matt Convente</Link>
      <nav className={styles.nav}>
        <Link href="/">Work</Link>
        <Link href="/">Resume</Link>
        <Link href="/">Contact</Link>
      </nav>
    </header>
  )
}
