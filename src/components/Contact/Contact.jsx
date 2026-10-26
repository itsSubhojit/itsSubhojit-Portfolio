import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    'bot-field': ''
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})
  const [lastSubmit, setLastSubmit] = useState(0)

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // REAL-TIME VALIDATION
    let newErrors = { ...errors }

    if (name === 'first_name') {
      if (value.trim().length > 0 && value.trim().length < 3) {
        newErrors.first_name = "Min 3 chars"
      } else {
        delete newErrors.first_name
      }
    }

    if (name === 'last_name') {
      if (value.trim().length > 0 && value.trim().length < 3) {
        newErrors.last_name = "Min 3 chars"
      } else {
        delete newErrors.last_name
      }
    }

    if (name === 'email') {
      if (value.trim().length > 0 && !isValidEmail(value)) {
        newErrors.email = "Invalid Email"
      } else {
        delete newErrors.email
      }
    }

    if (name === 'message') {
      if (/https?:\/\/|www\./i.test(value)) {
        newErrors.message = "Links not allowed"
      } else if (/(.)\1{4,}/.test(value)) {
        newErrors.message = "No repeated characters"
      } else if (value.trim().length > 0 && value.trim().length < 20) {
        newErrors.message = "Min 20 characters"
      } else {
        delete newErrors.message
      }
    }

    setErrors(newErrors)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.first_name.trim() || formData.first_name.trim().length < 3) {
      newErrors.first_name = formData.first_name.trim().length === 0 ? "Required" : "Min 3 chars"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Required"
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid Email"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Required"
    } else if (/https?:\/\/|www\./i.test(formData.message)) {
      newErrors.message = "Links not allowed"
    } else if (/(.)\1{4,}/.test(formData.message)) {
      newErrors.message = "No repeated characters"
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Min 20 characters"
    }

    if (Date.now() - lastSubmit < 30000) {
      newErrors.general = "Please wait 30 seconds before sending again"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setStatus('error')
      return
    }

    setErrors({})
    setLastSubmit(Date.now())
    setStatus('sending')

    const body = new URLSearchParams({
      'form-name': 'contact',
      'bot-field': formData['bot-field'] || '',
      ...formData,
    }).toString()

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ first_name: '', last_name: '', email: '', message: '', 'bot-field': '' })
      } else {
        setStatus('error')
        setErrors({ general: "Submission failed. Please try again." })
      }
    } catch {
      setStatus('error')
      setErrors({ general: "Something went wrong. Please try again." })
    }
  }

  return (
    <div className='mt-32 mb-12 flex justify-center px-6'>
      <div className='w-full max-w-xl 
                      bg-gradient-to-r from-blue-400/20 to-cyan-400/20
                      backdrop-blur-lg border border-white/30
                      rounded-2xl p-6 md:p-8 shadow-lg'>
        
        <h1 className='dark:text-white text-2xl font-serif md:text-3xl font-bold text-center mb-6 text-gray-800'>
          Contact Me
        </h1>

        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          noValidate
          className='flex flex-col gap-5'
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <p className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} /></label>
          </p>

          {/* First Name */}
          <div className='flex flex-col'>
            <label className='dark:text-white text-sm text-gray-600 font-semibold'>
              First Name
            </label>
            <div className='relative mt-1'>
              <input 
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className={`w-full px-3 py-2 pr-10 rounded-md bg-white/40 border transition-all duration-200
                           ${errors.first_name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'}
                           focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black`}
                type="text"
                placeholder='Enter your first name'
              />
              {/* Green Tick: Only if 3+ chars and no errors */}
              {formData.first_name.trim().length >= 3 && !errors.first_name && (
                <div className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 bg-green-500 rounded-full text-white text-[10px] shadow-sm'>
                  ✓
                </div>
              )}
              {errors.first_name && (
                <span className='absolute right-3 top-1/2 -translate-y-1/2 text-red-600 text-[10px] font-bold uppercase'>
                  {errors.first_name}
                </span>
              )}
            </div>
          </div>

          {/* Last Name */}
          <div className='flex flex-col'>
            <label className='dark:text-white text-sm text-gray-600 font-semibold'>
              Last Name
            </label>
            <div className='relative mt-1'>
              <input 
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className={`w-full px-3 py-2 pr-10 rounded-md bg-white/40 border transition-all duration-200
                           ${errors.last_name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'}
                           focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black`}
                type="text"
                placeholder='Enter your last name'
              />
              {/* Green Tick: Only if 3+ chars and no errors */}
              {formData.last_name.trim().length >= 3 && !errors.last_name && (
                <div className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 bg-green-500 rounded-full text-white text-[10px] shadow-sm'>
                  ✓
                </div>
              )}
              {errors.last_name && (
                <span className='absolute right-3 top-1/2 -translate-y-1/2 text-red-600 text-[10px] font-bold uppercase'>
                  {errors.last_name}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className='flex flex-col'>
            <label className='dark:text-white text-sm text-gray-600 font-semibold'>
              Email
            </label>
            <div className='relative mt-1'>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 pr-10 rounded-md bg-white/40 border transition-all duration-200
                           ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'}
                           focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black`}
                type="email"
                placeholder='Enter your email'
              />
              {formData.email.trim() && isValidEmail(formData.email) && !errors.email && (
                <div className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 bg-green-500 rounded-full text-white text-[10px] shadow-sm'>
                  ✓
                </div>
              )}
              {errors.email && (
                <span className='absolute right-3 top-1/2 -translate-y-1/2 text-red-600 text-[10px] font-bold uppercase'>
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Message */}
          <div className='flex flex-col'>
            <label className='dark:text-white text-sm text-gray-600 font-semibold'>
              Message
            </label>
            <div className='relative mt-1'>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={500}
                className={`w-full px-3 py-2 pr-10 rounded-md bg-white/40 border transition-all duration-200
                           ${errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'}
                           focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black h-28 resize-none`}
                placeholder='Write your message...'
              />
              {formData.message.trim() && !errors.message && (
                <div className='absolute right-2 bottom-3 flex items-center justify-center w-5 h-5 bg-green-500 rounded-full text-white text-[10px] shadow-sm'>
                  ✓
                </div>
              )}
              {errors.message && (
                <span className='absolute right-3 bottom-3 text-red-600 text-[10px] font-bold uppercase'>
                  {errors.message}
                </span>
              )}
            </div>
          </div>

          <div className='min-h-[24px]'>
            {status === 'success' && (
              <p className='text-green-500 text-center font-semibold animate-bounce'>
                ✅ Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className='text-red-500 text-center font-semibold'>
                ❌ {errors.general || 'Please fix the errors above.'}
              </p>
            )}
          </div>

          <button 
            type="submit"
            disabled={status === 'sending'}
            className='mt-2 w-full py-2 rounded-md bg-indigo-600 text-white text-xl font-mono font-bold hover:bg-indigo-500 transition duration-200 disabled:opacity-50'>
            {status === 'sending' ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact