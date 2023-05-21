import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

// Contact page component 
function Contact() {
  return (
    // Contact section of the page
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
        <div className='rightSide'>
            <h1>Contacto</h1>
            {/* Form to send a message to the company  */}
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Nombre</label>
                <input name='name' placeholder='Introduce tu nombre' type='text' />
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Introduce tu email' type='email' />
                <label htmlFor='message'>Mensaje</label>
                <textarea rows='6' placeholder='Introduce tu mensaje' name='message' required />
                <button type='submit'>Enviar mensaje</button>
            </form>
        </div>

    </div>
  )
}

export default Contact