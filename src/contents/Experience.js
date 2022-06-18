import React, { Component } from 'react'
import Social from '../components/social'
import profilePic from '../img/profile.jpg'
import ReactTypingEffect from 'react-typing-effect'

class Experience extends Component {
    render() {
        return (

            <React.Fragment>
                <h1 className='subTopic'>EXPERIENCE</h1>
                <div className='condiv exper'>
                    <div className='row topOfExp'>
                        <div className='col-2'>
                        </div>
                        <div className='col-6'>
                            <img src={require('../img/job.png')} className='experPic' />
                            <label id="textExper">Software Developer </label>
                            <img src={require('../img/MFEC_PROFILE.jpg')} className='mfecProPic' />
                            <div className='rowExper'>
                                <label id="labelExperHead">MFEC Public Company Limited</label>
                                < br></br>
                                <label id="labelExper">Start May 2021 - Present</label>
                                < br></br>
                                <label id="labelExper">About 1 year at MFEC Public Company Limited</label>
                                <br></br>
                                <label id="labelExper">Implement Front end Web Application of internal system by using .net MVC</label>
                                <img src={require('../img/MFEC.jpg')} className='mfecPic' />
                            </div>
                        </div>
                        <div className='col-4'>
                          
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

export default Experience;