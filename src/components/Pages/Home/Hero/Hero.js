import React from "react"
import Input from "../../../Ui/Input/Input"
import "./Hero.css"
import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__container'>
        <div className='hero__wrapper'>
          <div className='hero__images'>
            <img
              className='hero__image'
              src='./images/phone_primary.svg'
              alt='phone'
            ></img>
          </div>
          <div className='hero__content'>
            <h1 className='hero__title tetiary-heading-big'>
              Start building with our APIs for absolutely free.
            </h1>
            <div className='hero__input'>
              <Input left={true} />
            </div>
            <p className='hero__copy'>
              Have any questions?
              <Link to='/contact'>
                <strong> Contact Us</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
