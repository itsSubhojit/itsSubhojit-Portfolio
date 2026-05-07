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
  const [errorMsg, setErrorMsg] = useState('')
  const [lastSubmit, setLastSubmit] = useState(0)

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.first_name.trim()) {
      setStatus('error')
      setErrorMsg("First name is required")
      return
    }
    if (!formData.email || !isValidEmail(formData.email)) {
      setStatus('error')
      setErrorMsg("Please enter a valid email")
      return
    }
    if (!formData.message.trim()) {
      setStatus('error')
      setErrorMsg("Message cannot be empty")
      return
    }
    if (formData.message.length > 500) {
      setStatus('error')
      setErrorMsg("Message too long (max 500 characters)")
      return
    }
    if (Date.now() - lastSubmit < 30000) {
      setStatus('error')
      setErrorMsg("Please wait 30 seconds before sending again")
      return
    }

    setLastSubmit(Date.now())
    setErrorMsg('')
    setStatus('sending')

    // This part is the MOST important — it must include the bot-field!
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
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className='mt-32 mb-12 flex justify-center px-6'>

      <div className='w-full max-w-xl 
                      bg-gradient-to-r from-blue-400/20 to-cyan-400/20
                      backdrop-blur-lg border border-white/30
                      rounded-2xl p-6 md:p-8 shadow-lg'>

        {/* Heading */}
        <h1 className='dark:text-white text-2xl font-serif md:text-3xl font-bold text-center mb-6 text-gray-800'>
          Contact Me
        </h1>

        {/* Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className='flex flex-col gap-5'
        >
          {/* Required by Netlify for AJAX submissions */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field for spam protection */}
          <p className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} /></label>
          </p>

          {/* First Name */}
          <div className='flex flex-col'>
            <label className='dark:text-white text-sm text-gray-600 font-semibold'>
              First Name
            </label>
            <input
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className='mt-1 px-3 py-2 rounded-md 
                         bg-white/40 border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-400
                         text-black'
              type="text"
              placeholder='Enter your first name'
            />
          </div>

          {/* Last Name */}
          <div className='flex flex-col'>
            <label className='dark:text-white text-sm text-gray-600 font-semibold'>
              Last Name
            </label>
            <input
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className='mt-1 px-3 py-2 rounded-md 
                         bg-white/40 border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-400
                         text-black'
              type="text"
              placeholder='Enter your last name'
            />
          </div>

          {/* Email */}
          <div className='flex flex-col'>
            <label className='dark:text-white text-sm text-gray-600 font-semibold'>
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='mt-1 px-3 py-2 rounded-md 
                         bg-white/40 border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-400
                         text-black'
              type="email"
              placeholder='Enter your email'
            />
          </div>

          {/* Message */}
          <div className='flex flex-col'>
            <label className='dark:text-white text-sm text-gray-600 font-semibold'>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={500}
              className='mt-1 px-3 py-2 rounded-md 
                         bg-white/40 border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-400
                         text-black h-28 resize-none'
              placeholder='Write your message...'
            />
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <p className='text-green-500 text-center font-semibold'>
              ✅ Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className='text-red-500 text-center font-semibold'>
              ❌ {errorMsg || 'Something went wrong. Please try again.'}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className='mt-2 w-full py-2 rounded-md 
                       bg-indigo-600 text-white text-xl font-mono font-bold 
                       hover:bg-indigo-500 transition duration-200
                       disabled:opacity-50'>
            {status === 'sending' ? 'Sending...' : 'Submit'}
          </button>

        </form>

      </div>
    </div>
  )
}

export default Contact