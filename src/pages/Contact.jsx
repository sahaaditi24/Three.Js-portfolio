import React from 'react'
import {useState} from 'react'

const Contact = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1>Get in touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>
            Name

            <input 
              type="text"
              name='name'
              className='input'
              placeholder="Aditi"
              required 
              value = {form.name} 
              onChange = {handleChange}
              onFocus = {handleFocus}
              onBlur = {handleBlur}
              
          />

          </label>


          <label className='text-black-500 font-semibold'>
            Email

            <input 
              type="text"
              name='email'
              className='input'
              placeholder="just@gmail.com"
              required 
              value = {form.email} 
              onChange = {handleChange}
              onFocus = {handleFocus}
              onBlur = {handleBlur}
              
          />

          </label>


          <label className='text-black-500 font-semibold'>
            Message

            <input 
              type="text"
              name='message'
              className='input'
              placeholder="hello"
              required 
              value = {form.message} 
              onChange = {handleChange}
              onFocus = {handleFocus}
              onBlur = {handleBlur}
              
          />

          </label>
          

        </form>
      </div>

    </section> 

  )
}

export default Contact