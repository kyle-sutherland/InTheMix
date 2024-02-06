import { FormspreeProvider } from '@formspree/react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import '@styles/globals.scss'

function Application ({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
    >
      <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT}>
        <Component {...pageProps} />
      </FormspreeProvider>
    </GoogleReCaptchaProvider>
  )
}

export default Application
