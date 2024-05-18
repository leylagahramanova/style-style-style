"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Talk.css'
import Image from 'next/image';
import vector from "@/app/img/Vector.png";
function Talk() {
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Make sure form.current is not null before calling sendForm.
    if (form.current) {
      emailjs
        .sendForm('service_4t2ddtt', 'template_1br93re', form.current, 'cGZORiRq9dQog-bA6')
        .then(
          () => {
            console.log('SUCCESS!');
            setMessageSent(true); // Set messageSent to true on successful submission
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <div className="talk">
      <h2>Creative project? Lets have a productive talk.</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="content-form">
          <div className="form-content">  <input className="input" name="user_name" type="text" placeholder="Name" />
            <input className="input" name="user_email" type="email" placeholder="Email" />
          </div>

          <textarea name="message" placeholder="Hello I am Interested in..." />

          <div className='cont-button'>
            <button id="cont">
              <a type="submit">Send Now</a> <Image src={vector} alt="" />
            </button>
          </div>
          <div className="messagel" style={{ padding:'1.5rem', }}>  
        <div style={{opacity:'0.9'}} >
        {messageSent && <h3 style={{opacity:'0.9',fontStyle: 'italic', color:'#000', textAlign:'center'}}>🎉Message sent</h3>}
    </div> 
     </div>
        </div>
      </form>
    </div>
  )
}

export default Talk
