import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import { SessionProvider } from "next-auth/react"

const progress = new ProgressBar({
  size: 2, 
  color: "#FE595E",
  className: "z-50",
  delay: 100
})

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
