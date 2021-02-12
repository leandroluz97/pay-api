import React from "react"
import "./Input.css"
const Input = () => {
  return (
    <form className='form'>
      <div className='form__group '>
        <input
          type='email'
          placeholder='Enter Email Address'
          className='form__input'
        ></input>
        <button className='form__btn'>Schedule a Demo</button>
      </div>
    </form>
  )
}

export default Input