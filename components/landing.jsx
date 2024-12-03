import { LandingButton } from '/components/buttons'
import Image from 'next/image'

export default function Landing() {
  return (
    <>
      <div className='landing bg-slate-300 opacity-75 mx-auto'>
        <Image
          src='/main-animation-avif.avif'
          className='landingImage'
          fill
          alt=''
          priority
        />
        <div className='landingContent text-stone-50 mx-auto text-center py-48'>
          <div className='landingTitle text-6xl p-3'>
            <p>Pride in the Pour</p>
          </div>
          <div className='text-xl p-3 mb-4 pt-0'>
            <p>Years of Experience, Quality Service, Crafted Cocktails</p>
          </div>
          <LandingButton text='Get In Touch' link='/#contact' />
        </div>
      </div>
    </>
  )
}
