import React, { useRef, useState,useEffect } from 'react';
import emailjs from 'emailjs-com'
import MainButton from '../../MainButton/MainButton';
import './Contacto.css';

const Contacto = () => {

  const form = useRef();
  const [input, setInput] = useState('');
  const [textArea, setTextArea] = useState('');
  const [mailError, setMailError] = useState(false);
  const [textError, setTextError] = useState(false);
  const [mailSent, setMailSent] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(String(email).toLowerCase());
  };

  const mailSentNotification = () => {
    setMailSent(true)
    setTimeout(() => {
      setMailSent(false)
    }, 3000);

  }

  const sendEmail = (e) => {
    e.preventDefault();

    /* eslint-disable */
    /* Si no hay mensaje, retorna error. Si el mail es inválido, retorna error. Si hay mensaje, quita el error y verifica si el mail es correcto. De ser así, se envia el mensaje y resetea los campos. */
    textArea !== ""
    ? (setTextError(false),
      validateEmail(input)
          ? (emailjs.sendForm("service_yk2qvco", "template_uoln1et", form.current, "tcEZqyCI-Kc4FMmgN"),
            e.target.reset(),
            setInput(""),
            setTextArea(""),
            setMailError(false),
            mailSentNotification())
          : setMailError(true))
    : (setTextError(true),
      validateEmail(input) ? setMailError(false) : setMailError(true));
  };
  /* eslint-enable */

  /* Detectan cambios en input y textarea para quitar el borde rojo. */
  useEffect(() => {
    setMailError(false)
  }, [input])

  useEffect(() => {
    setTextError(false)
  }, [textArea])
  
  return (
    <>
      {mailSent ? <span className='mail--sent p-24' data-aos="fade-down">Mensaje enviado! Nos pondremos en contacto a la brevedad. -Swype</span> : ''}
      <div className='contacto' data-aos="fade-up" data-aos-offset='100'>
        <div className='contacto__form--container'>
          <h2 className='contacto__title'>Consultas? Hablemos!</h2>
          <form ref={form} onSubmit={sendEmail} className='contacto__form'>
            <input value={input} onInput={e => setInput(e.target.value)} className={`${mailError ? "border-error" : ""}`} placeholder='Mail' type='text' name='email' id='inputMail'/>
            <textarea onInput={e => setTextArea(e.target.value)}  className={`${textError ? "border-error" : ""}`} placeholder='Dejanos tu mensaje!' type='text' name='message' id='textMail'></textarea>
            {mailError ? <p className='error-bubble p-24'>E-mail inválido. Por favor, verifique e intente nuevamente.</p> : ''}
            {textError ? <p className='error-bubble p-24'>Mensaje inválido. Por favor, verifique e intente nuevamente.</p> : ''}
            <MainButton text='Enviar' destiny='send'/>
          </form>
        </div>
        <div className='contacto__medios--container'>
          <div>
            <h3 className='contacto__sub-title'>Mail</h3>
            <a href='mailto:swypecreativo@gmail.com' target='_blank' rel='noreferrer noopener'>
              <p className='p-36'>swypecreativo@gmail.com</p>
            </a>
          </div>
          <div>
            <h3 className='contacto__sub-title'>Teléfono</h3>
            <a href='https://wa.me/3513496762' target='_blank' rel='noreferrer noopener'>
              <p className='p-36'>+54 3513496762</p>
            </a>
          </div>
          <div>
            <h3 className='contacto__sub-title'>Instagram</h3>
            <a href='https://www.instagram.com/swypecreativo/' target='_blank' rel='noreferrer noopener'>
              <p className='p-36'>@swypecreativo</p>
            </a>
          </div>
          <div>
            <h3 className='contacto__sub-title'>Facebook</h3>
            <a href='https://www.facebook.com/swypeestudiocreativo/' target='_blank' rel='noreferrer noopener'>
              <p className='p-36'>@swypeestudiocreativo</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacto;
