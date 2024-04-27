import { EmailJSResponseStatus } from "@emailjs/browser";
import { useState } from "react";
import emailjs from '@emailjs/browser'

export default function ContactMe() {
  const [firstName,setFirstName]=useState('')
  const [secondName,setSecondName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [message,setMessage]=useState('')

  const handleSubmit=(e) => {
    e.preventDefault();

    // your EmailJs serviceId, template Id and public key

    const serviceId = "service_6teavvm"
    const templateId = "template_ugu11d7"
    const publicKey = "WB1FwFhdcpHEybhm5"

    // create a new object that contains dynamic template params

    const templateParams = {
      from_name:firstName,
      last_name:secondName,
      from_email:email,
      from_phone:phone,
      to_name:'Aiswarya Shaji',
      message:message
    }

    // send the email using Emailjs

    emailjs.send(serviceId,templateId,templateParams,publicKey)
    .then((response)=>{
      // console.log('Email sent successfully!',response);
      alert('Email send successfully!!')
    // Resetting state values immediately
    setFirstName(() => '');
    setSecondName(() => '');
    setEmail(() => '');
    setPhone(() => '');
    setMessage(() => '');
    })
    .catch((error)=>{
      console.error('Error sending email:', error)
    })
  }

  return (

    
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
      
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
              onChange={(e)=>setFirstName(e.target.value)}
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
              onChange={(e)=>setSecondName(e.target.value)}

            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
              onChange={(e)=>setEmail(e.target.value)}

            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
              onChange={(e)=>setPhone(e.target.value)}

            />
          </label>
        </div>
      
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            onChange={(e)=>setMessage(e.target.value)}

          />
        </label>
     
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
