import type { Metadata } from 'next'
import './globals.css'
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: 'F1-x',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <PageTransition />
        {children}
      </body>
    </html>
  )
}
