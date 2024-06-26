import Header from '../components/Header';
import Footer from '../components/Footer';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    
    emailjs
    .sendForm('service_6cb85cy', 'template_i422dls', form.current, {
      publicKey: 'R26cz0LSMfwmVY0Nk',
    })
    .then(
      () => {
          setSent(true);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }

    return <>
        <div id="bodyWrapper">
            <Header />
            <div className="content">
                <div className="con">
                    {!sent && <>
                        <h1 style={{ textAlign: 'center'}}>Get In Touch</h1>
                        <p style={{ textAlign: 'center', width: 450, margin: '0 auto'}}>Please feel free to reach out to me with any questions or comments. I do my best to respond timely. </p>
                        <form className="contactForm" ref={form} onSubmit={handleSend}>
                            <input type="text" name="user_name" placeholder="name" />
                            <br />
                            <input type="email" name="user_email" placeholder="email" />
                            <br />
                            <textarea name="message" placeholder="your message here ..." />
                            <br />
                            <input type="submit" value="send"/>
                        </form>
                        <p style={{ textAlign: 'center', width: 450, margin: '0 auto'}}>powered by <a href="https://www.emailjs.com/" target="__blank">EmailJS</a></p>
                    </>}
                    {sent && <>
                        <h1 style={{textAlign: 'center'}}>Message Sent</h1>
                        <h1 style={{textAlign: 'center', fontSize: '100px'}}>💙</h1>
                      <h4 style={{textAlign: 'center'}}>Thank you for reaching out to me. I will get back to you as soon as possible.</h4>
                    </>}
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default Contact;
