
// import { Alert } from 'bootstrap';
import './contact.css'
import React from 'react';
// import { AlertLink } from 'react-bootstrap';

function Contact() {

    const [data, setData] = React.useState({
        FullName: "",
        Email: "",
        Typeyourmessage: ""
    });

    const [submitdata, setSubmitdata] = React.useState([])

    const handlechange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    console.log(submitdata);

    const handlesubmit = (e) => {
        e.preventDefault();
        setSubmitdata([...submitdata, data])

        setData({
            FullName: "",
            Email: "",
            Typeyourmessage: ""
        })
    }

   

    const style = {
        backgroundImage: "url('src/assets/Image/background image.avif')",
        backgroundSize: "cover",
        height: "87vh"
    }

    return (
        <div style={style}>
            <div className='all'>
                <div className='contact'>Contact</div>
            </div>
            <div className='contactline'>Any question or remarks? Just write us a message! </div>

            <div className='menu'>
                <div className='left'>
                    <div className='address'>
                        <img src='src/assets/Icon/address icon.png' className='address1'></img>
                        <div className='world'>
                            <div className='action'>Address</div>
                            <div className='contact-street'>99 Kunguliyar Street Kosapalayam Arni</div>
                        </div>
                    </div>


                    <div className='email'>
                        <img src='src/assets/Icon/emaillogo.png' className='email1'></img>
                        <div className='world'>
                            <div className='action'>Email</div>
                            <div className='arni'>devikasekar16@gmail.com</div>
                        </div>
                    </div>
                    <div className='phone'>
                        <img src='src/assets/Icon/phoneicon.png' className='phone1'></img>
                        <div className='world'>
                            <div className='action'>Phone</div>
                            <div className='arni'>7548891465</div>
                        </div>
                    </div>
                    <div className='linkedin'>
                        <img src="src/assets/Icon/linkedin icon.png" className='linkedin1'></img>
                        <div className='world'>
                            <div className='action'>Linkedin</div>
                            <div className='arni'>https://www.linkedin.com/in/devikasekar16</div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='triangle'>
                        <form className='form-card' onSubmit={handlesubmit}>
                            <div className='send'>Send Message</div>
                            <div className='input'>
                                <input placeholder="Full Name" type='text' className='name' name='FullName' onChange={handlechange} value={data.FullName}></input>
                            </div>
                            <div className='input'>
                                <input placeholder="Email" type='email' className='name' name='Email' onChange={handlechange} value={data.Email}></input>
                            </div>
                            <div className='input'>
                                <input type='text' placeholder="Type Your Message..." className='name' name='Typeyourmessage' onChange={handlechange} value={data.Typeyourmessage}></input>
                            </div>
                            <div className='submit'>
                                <button className='submit-button' type='submit'>submit</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact;


