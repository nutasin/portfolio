import React, { Component } from 'react'
import Social from '../components/social'

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className='subTopic'>CONTACT</h1>
                <div className='condiv contact'>
                    <div className='row contactRow'>
                        <div className='col-6 colContact'>
                            <img src={require('../img/contact.jpg')} className='contactPic' />
                        </div>
                        <div className='col-6 colContact2'>
                         <label className='textContact'><img src={require('../img/gmail.png')} className='contactIcon' /> &nbsp;&nbsp;nutasin.saw@gmail.com</label>
                         <br></br>
                            <label className='textContact'><img src={require('../img/facebook.png')} className='contactIcon' /> &nbsp;&nbsp;Nutasin Sawanjit</label>
                            <br></br>
                            <label className='textContact'><img src={require('../img/linkedin.png')} className='contactIcon' /> &nbsp;&nbsp;Nutasin Sawanjit</label>
                            <br></br>
                            <label className='textContact'><img src={require('../img/line.png')} className='contactIcon' /> &nbsp;&nbsp;@nutasin123</label>
                            <br></br>
                            <label className='textContact'><img src={require('../img/instagram.png')} className='contactIcon' /> &nbsp;&nbsp;@nutasin.sj</label>
                            <br></br>
                            <label className='textContact'><img src={require('../img/smartphone.png')} className='contactIcon' /> &nbsp;&nbsp;0814074511</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="SocialRow col-12">
                            <Social />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;