import type { Metadata } from 'next'
import './globals.css'
import PageTransition from "@/components/page-transition";
import ClientMouseTracker from "@/components/ClientMouseTracker";

export const metadata: Metadata = {
  title: 'F1-x',
  description: "An F1 showcase site featuring deep insights like why F1 isn't in India.",
  generator: ':vs',
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
        <ClientMouseTracker />
        <PageTransition skipTransitionFor={["/"]}>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
