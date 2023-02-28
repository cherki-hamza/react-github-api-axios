import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const [display, setDisplay] = useState('none');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_um0yrya',
      'template_b9cghoe',
      e.target,
      'Wk8Uwe-3yAJsMsLDu',

    ).then(res => {
      console.log(res);
      setDisplay('block');

      setUsername('');
      setEmail('');
      setMessage('');

    }).catch(err => {
      console.log(err);
    })

  }
  return (
    <div className='d-flex justify-content-center'>
      <div className='card card-primary d-flex justify-content-center'>
        <form onSubmit={sendEmail}>

          <div className='form-group d-flex justify-content-center'>
            <h2 className='text-success my-5'> Contact me </h2>

          </div>
          <div className='alert alert-primary my-5 border-danger' style={{ display: display }}>Your Message send with success ): have a nice day Thanks. </div>

          <div className='form-group'>
            <label>Username</label>
            <input type="text" style={{ width: '400px' }} name="username" className="form-control" placeholder="Enter Uesrname" onChange={(e) => { setUsername(e.target.value) }} value={username} />
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input type="email" style={{ width: '400px' }} name="email" className="form-control" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
          </div>

          <div className='form-group'>
            <label>Message</label>
            <textarea name="message" className="form-control" placeholder="Enter Message" rows="6" onChange={(e) => { setMessage(e.target.value) }} value={message} ></textarea>
          </div>

          <div className='form-group d-flex justify-content-center'>
            <button className='btn btn-primary my-5'>Send</button>
          </div>

        </form>
      </div>
    </div >
  )
}

export default Contact