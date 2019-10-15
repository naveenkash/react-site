import React from 'react'

function contactForm() {
    return (
        <form  className="contact_form">
        <div className="form_info">
          <input aria-label="Type your full name" className="name" placeholder="Full name" type="text" />
          <input aria-label="Type your email" className="email" placeholder="Email" type="email" />
          <input aria-label="Type your number" className="number" placeholder="Number" type="number" />
        </div>

        <textarea aria-label="Type your messge" resize="none" placeholder="Message" className="message" ></textarea>
        <input aria-label="click to submit your form" className="submit" type="submit" />
      </form>
    )
}

export default contactForm
