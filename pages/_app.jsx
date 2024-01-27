import { FormspreeProvider } from "@formspree/react";
import "@styles/globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";

function Application({ Component, pageProps }) {
  return (
      <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT}>
        <Component {...pageProps} />
      </FormspreeProvider>
  );
}

export default Application;
