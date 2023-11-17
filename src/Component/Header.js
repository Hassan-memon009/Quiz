import React from 'react'
import '../Css/Global.css'
import image1 from '../img/image 1.png'
import image2 from '../img/image 2.png'
import image3 from '../img/image 3.png'
import Of1 from '../img/Rectangle 2.png'
import Of2 from '../img/Rectangle 3.png'
import Of3 from '../img/Rectangle 4.png'
import Of4 from '../img/Rectangle 5.png'
import Of5 from '../img/Rectangle 6.png'
import Of6 from '../img/Rectangle 7.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='index'>
      <div className='div'>
        <div className='group-wrapper'>
          <div className='group-9'>
            <div className='navbar'>
              <div className='text-wrapper-9'>Home</div>
              <div className='text-wrapper-10'>Menu</div>
              <div className='text-wrapper-11'>About Us</div>
              <div className='text-wrapper-12'>Contact</div>
            </div>
            <img className='image-3' alt='Image' src={image1} />
          </div>
        </div>
        <div className='hero-section'>
          <p className='indulge-in-a'>
            Indulge in a symphony of flavors at our artisanal bakery. <br />
            Welcome to a world where the aroma of freshly baked <br />
            wonders captivates your senses. Our master bakers <br />
            craft each creation with passion, using only the finest <br />
            ingredients to ensure every bite is pure delight. <br />
            <br />
            From flaky croissants to decadent cakes, experience <br />
            the epitome of taste and craftsmanship. Whether it&#39;s <br />a
            special occasion or a craving for the extraordinary, <br />
            our bakery offers a haven for your palate. Elevate <br />
            your moments with the magic of our oven-fresh delights. <br />
            Your journey to exceptional taste begins here.
          </p>
          <img className='image' alt='Image' src={image2} />
        </div>
        <div className='overlap'>
          <img className='rectangle' alt='Rectangle' src={Of2} />
          <img className='img' alt='Rectangle' src={Of3} />
          <div className='group'>
            <img className='rectangle-2' alt='Rectangle' src={Of1} />
            <img className='rectangle-3' alt='Rectangle' src={Of4} />
            <img className='rectangle-4' alt='Rectangle' src={Of5} />
            <img className='rectangle-5' alt='Rectangle' src={Of6} />
          </div>
          <div className='group-2'>
            <div className='barfi-rs'>
              Barfi
              <br />
              Rs. 900/=
            </div>
            <div className='overlap-group-wrapper'>
              <div className='overlap-group'>
                <button className='text-wrapper'>Order Now</button>
              </div>
            </div>
          </div>
          <div className='group-3'>
            <div className='barfi-rs'>
              Barfi
              <br />
              Rs. 900/=
            </div>
            <div className='overlap-group-wrapper'>
              <div className='overlap-group'>
                <button className='text-wrapper'>Order Now</button>
              </div>
            </div>
          </div>
          <div className='group-4'>
            <div className='barfi-rs'>
              Barfi
              <br />
              Rs. 900/=
            </div>
            <div className='overlap-group-wrapper'>
              <div className='overlap-group'>
                <button className='text-wrapper'>Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className='text-wrapper-2'>Our offerings</div>
        <div className='group-5'>
          <div className='barfi-rs'>
            Barfi
            <br />
            Rs. 900/=
          </div>
          <div className='overlap-group-wrapper'>
            <div className='overlap-group'>
              <button className='text-wrapper'>Order Now</button>
            </div>
          </div>
        </div>
        <div className='group-6'>
          <div className='barfi-rs'>
            Barfi
            <br />
            Rs. 900/=
          </div>
          <div className='overlap-group-wrapper'>
            <div className='overlap-group'>
              <button className='text-wrapper'>Order Now</button>
            </div>
          </div>
        </div>
        <div className='group-7'>
          <div className='barfi-rs'>
            Barfi
            <br />
            Rs. 900/=
          </div>
          <div className='overlap-group-wrapper'>
            <div className='overlap-group'>
              <button className='text-wrapper'>Order Now</button>
            </div>
          </div>
        </div>
        <div className='overlap-wrapper'>
          <div className='overlap-2'>
            <img className='image-2' alt='Image' src={image3} />
            <div className='group-8'>
              <p className='at-our-bakery-baking'>
                At our bakery, baking isn&#39;t just a process; it&#39;s an art,
                a passion that&#39;s woven into every loaf, pastry, and
                confection we create. Established with a vision to redefine
                indulgence, we take pride in crafting experiences that transcend
                the ordinary. Our story began with a small kitchen and a big
                dream – to infuse the world with the warmth of freshly baked
                goods. <br />
                <br />
                What sets us apart is our unwavering commitment to quality. We
                meticulously source the finest ingredients, from velvety
                chocolate to locally grown fruits, ensuring that every bite
                tells a tale of exceptional flavor. But it&#39;s not just about
                ingredients; it&#39;s about the hands that shape them. Our
                dedicated team of master bakers pours their heart into each
                recipe, combining time-honored techniques with innovative
                twists.
                <br />
                <br />
                From the moment you step into our bakery, you&#39;re enveloped
                in a symphony of scents and sights that awaken your senses.
                Every creation that graces our shelves is a result of countless
                hours of experimentation, dedication, and a genuine love for
                baking. But we&#39;re more than just bakers; we&#39;re a
                community brought together by a shared love for all things
                delicious.
                <br />
                <br />
                As we knead, roll, and bake, we&#39;re not just making pastries
                – we&#39;re crafting memories. From birthday celebrations marked
                by our custom cakes to lazy Sunday mornings made better with our
                artisanal bread, we&#39;re there for life&#39;s sweetest
                moments. Our journey is one of passion, flavor, and the joy that
                comes from spreading happiness, one delectable treat at a time.
              </p>
              <div className='text-wrapper-3'>About Us</div>
            </div>
          </div>
        </div>
        <div className='overlap-3'>
          <div className='div-wrapper'>
            <div className='text-wrapper-4'>Submit</div>
          </div>
          <div className='text-wrapper-5'>Contact Us</div>
          <div className='overlap-4'>
            <div className='text-wrapper-6'>Full Name</div>
          </div>
          <div className='overlap-5'>
            <div className='text-wrapper-7'>Phone</div>
          </div>
          <div className='overlap-6'>
            <div className='text-wrapper-6'>Address</div>
          </div>
          <div className='overlap-7'>
            <div className='text-wrapper-8'>Description</div>
          </div>
          <div className='overlap-8'>
            <div className='text-wrapper-7'>Email</div>
          </div>
        </div>
        <div className='overlap-9'>
          <p className='p'>All rights are reserved by @BakeryStore</p>
        </div>
      </div>
    </div>
  )
}

export default Header
