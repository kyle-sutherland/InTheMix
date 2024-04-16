import Head from 'next/head'
import Sidebar from '@components/sidebar'
import Navbar from '@components/navbar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export default function Layout ({ children }) {
  return (
    <>
      <Head>
        <title>In The Mix Bartending</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <SpeedInsights />
        <div
          id='sidebar'
          className='fixed top-0 left-0 z-40 h-screen p-4 transition-transform -translate-x-full xl:translate-x-0 bg-white w-shrink dark:bg-gray-800 inline'
        >
          <Sidebar />
        </div>
        <div
          id='navbar'
          className='fixed top-0 left-0 right-0 z-40 w-full transition-transform xl:-translate-y-full translate-y-0 bg-white dark:bg-gray-800'
        >
          <Navbar />
        </div>
        <GoogleReCaptchaProvider>{children}</GoogleReCaptchaProvider>
        <Analytics />
      </main>
    </>
  )
}
