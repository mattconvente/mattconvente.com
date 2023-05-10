import './globals.css'

export const metadata = {
  title: 'Home — Matt Convente',
  description: 'The personal website of Matt Convente, UX Engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
