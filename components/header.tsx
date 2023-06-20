import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">Matt Convente</Link>
      <nav className={styles.nav}>
        <Link href="/work">Work</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
