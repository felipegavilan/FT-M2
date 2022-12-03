import React from 'react'

import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {};
  if(!inputs.name){
    errors.name = 'Se requiere un nombre';
  }
  if(!regexEmail.test(inputs.email)){
    errors.email = 'Debe ser un correo electrónico';
  }
  if(inputs.phone <= 0){
    errors.phone = 'Sólo números positivos';
  }
  if(!inputs.subject){
    errors.subject = 'Se requiere un asunto';
  }
  if(!inputs.message){
    errors.message = 'Se requiere un mensaje';
  }
  return errors;
}

export default function Contact () {

const [inputs, setInputs] = React.useState({
  name:'',
  email:'',
  phone: 0,
  subject:'',
  message:'',
})

const [errors, setErrors] = React.useState({
  name:'',
  email:'',
  phone: '',
  subject:'',
  message:'',
})


const handleChange = (e) => {
  setInputs({
    ...inputs, 
    [e.target.name]: e.target.value
  })
  setErrors(
    validate({
      ...inputs,
      [e.target.name]: e.target.value, 
    })
  )
}

const handleSubmit = (e) => {
  e.preventDefault()
  
  if(Object.entries(errors).length === 0){
     alert('Datos completos');
     setInputs({
      name:'',
      email:'',
      phone: 0,
      subject:'',
      message:'',
     })
     setErrors(validate({
      name:'',
      email:'',
      phone: '',
      subject:'',
      message:'',
     })) 
    } else{
     return alert('Debes corregir los errores');
    }
}

  return (
        <div>
          <form  onSubmit={handleSubmit}>
            <label htmlFor='name'>Nombre:</label>
            <input 
            id='name'
            type="text" 
            name="name" 
            value={inputs.name} 
            onChange={handleChange} 
            placeholder="Escribe tu nombre..."
            className={errors.name && 'warning'}
            />
            <p className='danger'>{errors.name}</p>
            <label htmlFor='email'>Correo Electrónico:</label>
            <input
            id='email' 
            type="text" 
            name="email" 
            value={inputs.email} 
            onChange={handleChange} 
            placeholder="Escribe tu email..."
            className={errors.email && 'warning'}
            />
            <p className='danger'>{errors.email}</p>
            <label htmlFor='phone'>Teléfono:</label>
            <input 
            id='phone'
            type="number" 
            name="phone" 
            value={inputs.phone} 
            onChange={handleChange} 
            placeholder="Escribe un teléfono..."
            className={errors.phone && 'warning'}
            />
            <p className='danger'>{errors.phone}</p>
            <label htmlFor='subject'>Asunto:</label>
            <input
            id='subject' 
            type="text" 
            name="subject" 
            value={inputs.subject} 
            onChange={handleChange} 
            placeholder="Escribe el asunto..."
            className={errors.subject && 'warning'}
            />
            <p className='danger'>{errors.subject}</p>
            <label htmlFor='message'>Mensaje:</label>
            <textarea
            id='message' 
            type="text" 
            name="message" 
            value={inputs.message} 
            onChange={handleChange} 
            placeholder="Escribe tu mensaje..."
            className={errors.message && 'warning'}
            />
            <p className='danger'>{errors.message}</p>
            <button type="submit">Enviar</button>
          </form>
        </div>
        )
}



