import React from 'react'
import './Contact.css'
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';

const Contact=()=>{

        const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "56ee58af-9f07-4944-999d-cf0f517b43ed");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


    return(
        <div id='contact'className="contact">
           <div className="contact-title">
            <h1>Get in touch</h1>
            </div> 
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                <div className="contact-details">
                    <div className="mail">
                     <MdEmail size={30} color="cyan" /><p>maulikexample@gmail.com</p>
                    </div>
                    <div className="phone-no">
                      <FiPhone size={30} color="cyan" /><p>+91 9831139810</p>
                    </div>
                    <div className="address">
                          <MdLocationOn size={30} color="cyan" />
                          <p>Mumbai, India</p>
                    </div>
                    </div>
                </div>
               
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="name">Enter your name:</label>
                <input type="text" id="name" name='name' autoComplete="name" placeholder='Enter your name:'required/>

                <label htmlFor="email">Enter your e-mail:</label>
                <input type="email" id="email" name='email' autoComplete="email" placeholder='Enter your e-mail:' required />

                <label htmlFor="message">Write your message:</label>
                <textarea name="message" id="message" rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className="submit">Submit</button>
            </form>



            </div>
        </div>
    )
}

export default Contact