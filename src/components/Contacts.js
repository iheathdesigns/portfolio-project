import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contacts = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm()

    const serviceID = 'service_ID'
    const templateID = 'template_ID'
    const userID = 'user_cHuxvB1yiqeTwI0fT8lgK'

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
             templateID,
             {
                 name: data.name,
                 phone: data.phone,
                 email: data.email,
                 subject: data.subject,
                 description: data.description
             },
             userID
             )
             r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        

        emailjs.send(serviceID, templateID, variables, userID)
        .then(() => {
            setSuccessMessage('Form sent successfully!');
        }).catch(err => console.error(`Something went wrong ${err}`));
    }

  return (
  <div className='contacts'>
      <div className="text-center">
      <h1>contact me</h1>
      <p>Please fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
      <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
              <div className="col-md-6 col-xs-12">
                  <div className="text-center">
                  <input 
                  type="text" 
                  className='form-control' 
                  placeholder='Name' 
                  name='name'
                  ref={
                      register({
                          required: 'Please enter your name',
                          maxLength: {
                              value: 20,
                              message: 'Please enter a name with fewer than 20 characters'
                          }
                      })
                  }/>
                  <div className="line"></div>
                  </div>
                  <span className="error-message">
                      {errors.name && errors.name.message}
                  </span>
                 <div className="text-center">
                 <input type="text" className='form-control' placeholder='Phone Number' name='phone'
                 ref={
                    register({
                        required: 'Please add your phone number',
                        
                    })
                }/>
                  <div className="line"></div>
                 </div>
                 <span className="error-message">
                     {errors.phone && errors.phone.message}
                 </span>
                  <div className="text-center">
                  <input type="email" className='form-control' placeholder='Email' name='email'
                  ref={
                    register({
                        required: 'Please provide your email',
                        pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                            message: 'invalid email'
                        }
                    })
                }/>
                  <div className="line"></div>
                  </div>
                  <span className="error-message">
                      {errors.email && errors.email.message}
                  </span>
                  <div className="text-center">
                  <input type="text" className='form-control' placeholder='Subject' name='subject'
                  ref={
                    register({
                        required: 'OOPS, you forgot to add the subject',
                        
                    })
                }/>
                  <div className="line"></div>
                  </div>
                  <span className="error-message">
                      {errors.subject && errors.subject.message}
                  </span>
              </div>
              <div className="col-md-6 col-xs-12">
                  <div className="text-center">
                  <textarea type='text' className='form-control' name="" placeholder='Please describe your project...' cols="30" rows="10"
                  ref={
                    register({
                        required: 'Please provide a description of your project needs...',
                        
                    })
                }></textarea>
                  <div className="line"></div>
                  </div>
                 <span className="error-message">
                     {errors.description && errors.description.message}
                 </span>
              <button className="btn-main-offer contact-btn" type='submit'>contact me</button>
              </div>
          </div>
          </form>
      </div>
  </div>
  )
};

export default Contacts;
