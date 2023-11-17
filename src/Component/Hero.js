import React from 'react'
import '../Css/Global.css'
import image2 from '../img/image 2.png'

function Welcome() {
  return (
    <div className='hero-section'>
      <p className='indulge-in-a'>
        Indulge in a symphony of flavors at our artisanal bakery. <br />
        Welcome to a world where the aroma of freshly baked <br />
        wonders captivates your senses. Our master bakers <br />
        craft each creation with passion, using only the finest <br />
        ingredients to ensure every bite is pure delight. <br />
        <br />
        From flaky croissants to decadent cakes, experience <br />
        the epitome of taste and craftsmanship. Whether it&#39;s <br />a special
        occasion or a craving for the extraordinary, <br />
        our bakery offers a haven for your palate. Elevate <br />
        your moments with the magic of our oven-fresh delights. <br />
        Your journey to exceptional taste begins here.
      </p>
      <img className='image' alt='Image' src={image2} />
    </div>
  )
}

export default Welcome
