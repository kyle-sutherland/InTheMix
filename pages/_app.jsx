import { FormspreeProvider } from '@formspree/react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import '@styles/globals.scss'

function Application ({ Component, pageProps }) {
  return (
    <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT}>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
      >
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </FormspreeProvider>
  )
}

export default Application
