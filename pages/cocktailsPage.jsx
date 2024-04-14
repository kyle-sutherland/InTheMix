import Layout from 'pages/layout'
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'

export default function cocktailsPage () {
  const cocktails = require('data/signature-cocktails.json')
  return (
    <Layout>
      <div className='body-content '>
        <div className='flex flex-col mx-auto container xl:max-w-7xl'>
          <div className='container cocktails-banner'>
            <Fade cascade>
              <Image />
              <div className='cocktails-h1'>
                <p>Signature Cocktails</p>
              </div>
              <div>
                <p className='cocktails-h2'>Tequila Cocktails</p>
                {cocktails.tequila.map((cocktail, i) => (
                  <div obj={cocktail} key={i} className=''>
                    <p className='cocktail-name'>{cocktail.name}</p>
                    <p>{cocktail.description}</p>
                    <p>{cocktail.ingredients.join(', ')}</p>
                    <br />
                  </div>
                ))}
              </div>
              <div>
                <p className='cocktails-h2'>Rum Cocktails</p>
                {cocktails.rum.map((cocktail, i) => (
                  <div obj={cocktail} key={i} className=''>
                    <p className='cocktail-name'>{cocktail.name}</p>
                    <p className='cocktail-description'>
                      {cocktail.description}
                    </p>
                    <p className='cocktail-ingredients'>
                      {cocktail.ingredients.join(', ')}
                    </p>
                    <br />
                  </div>
                ))}
              </div>
              <div>
                <p className='cocktails-h2'>Whiskey Cocktails</p>
                {cocktails.whiskey.map((cocktail, i) => (
                  <div obj={cocktail} key={i} className=''>
                    <p className='cocktail-name'>{cocktail.name}</p>
                    <p className='cocktail-description'>
                      {cocktail.description}
                    </p>
                    <p className='cocktail-ingredients'>
                      {cocktail.ingredients.join(', ')}
                    </p>
                    <br />
                  </div>
                ))}
              </div>
              <div>
                <p className='cocktails-h2'>Vodka Cocktails</p>
                {cocktails.vodka.map((cocktail, i) => (
                  <div obj={cocktail} key={i} className=''>
                    <p className='cocktail-name'>{cocktail.name}</p>
                    <p className='cocktail-description'>
                      {cocktail.description}
                    </p>
                    <p className='cocktail-ingredients'>
                      {cocktail.ingredients.join(', ')}
                    </p>
                    <br />
                  </div>
                ))}
              </div>
              <div>
                <p className='cocktails-h2'>Brandy Cocktails</p>
                {cocktails.brandy.map((cocktail, i) => (
                  <div obj={cocktail} key={i} className=''>
                    <p className='cocktail-name'>{cocktail.name}</p>
                    <p className='cocktail-description'>
                      {cocktail.description}
                    </p>
                    <p className='cocktail-ingredients'>
                      {cocktail.ingredients.join(', ')}
                    </p>
                    <br />
                  </div>
                ))}
              </div>
              <div>
                <p className='cocktails-h2'>Gin Cocktails</p>
                {cocktails.gin.map((cocktail, i) => (
                  <div obj={cocktail} key={i} className=''>
                    <p className='cocktail-name'>{cocktail.name}</p>
                    <p className='cocktail-description'>
                      {cocktail.description}
                    </p>
                    <p className='cocktail-ingredients'>
                      {cocktail.ingredients.join(', ')}
                    </p>
                    <br />
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Layout>
  )
}
