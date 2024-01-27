import { LandingButton } from '@components/buttons'
import { Suspense } from 'react'
import Image from 'next/image'
import mainAnimationPh from 'public/main-animation-ph.jpg'

export default function Landing () {
  const placeholder = () => {
      <Image
        src={ mainAnimationPh }
        alt=''
        className='landingImage'
        fill
        placeholder='blur'
        eager
      />
  }
  return (
    <>
      <div className='landing bg-slate-300 opacity-75'>
        <Suspense fallback={placeholder}>
          <Image
            src='/main-animation-avif.avif'
            className='landingImage'
            fill
            alt=''
            eager
          />
        </Suspense>
        <div className='landingContent text-stone-50 mx-auto text-center py-48'>
          <div className='landingTitle text-6xl p-3'>
            <p>Pride in the Pour</p>
          </div>
          <div className='text-lg p-3 mb-4 pt-0'>
            <p>Years of Experience, Quality Concoctions, Crafted Cocktails</p>
          </div>
          <LandingButton text='CONTACT US' link='/#contact' />
        </div>
      </div>
    </>
  )
}
