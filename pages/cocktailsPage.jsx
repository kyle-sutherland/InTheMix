import Layout from 'pages/layout'
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'

export default function cocktailsPage () {
  return (
    <Layout>
      <div className='body-content '>
        <div className='flex flex-col mx-auto container xl:max-w-7xl'>
          <div className='container cocktails-banner'>
            <Fade>
              <Image />
            </Fade>
          </div>
        </div>
      </div>
    </Layout>
  )
}
