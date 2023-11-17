import React from 'react'
import '../Css/Global.css'
import Of1 from '../img/Rectangle 2.png'
import Of2 from '../img/Rectangle 3.png'
import Of3 from '../img/Rectangle 4.png'
import Of4 from '../img/Rectangle 5.png'
import Of5 from '../img/Rectangle 6.png'
import Of6 from '../img/Rectangle 7.png'

export const Offering = () => {
  return (
    <>
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
              <div className='text-wrapper'>Order Now</div>
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
              <div className='text-wrapper'>Order Now</div>
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
              <div className='text-wrapper'>Order Now</div>
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
            <div className='text-wrapper'>Order Now</div>
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
            <div className='text-wrapper'>Order Now</div>
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
            <div className='text-wrapper'>Order Now</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offering
