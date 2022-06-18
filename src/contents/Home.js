import React, { Component } from 'react'
import Social from '../components/social'
import profilePic from '../img/profile.jpg'
// import ReactTypingEffect from 'react-typing-effect'
import { Row, Col, Container } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div className='condiv home'>

                <div className="row">
                    <div className="colLeft col-6">
                        {/* <ReactTypingEffect text={['My name is Nutasin Sawanjit', 'This is my Portfolio Website', 'This web is made from React JS', 'This will introduce my port']} speed={70} eraseDelay={1500} eraseSpeed={100} className="textName">Nutasin Sawanjit</ReactTypingEffect> */}
                        <p id="objP">My objective is I'm going to keep the experience for improve my technical skills and learn more about new thing.</p>
                        <a href='https://drive.google.com/file/d/1kcSSDGhWZo_PKfB_MZ0Q2xe5BRYG-n7z/view?usp=sharing' target="_blank" className='resumeBtn'>Resume  <i class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                    <div className="col-6">
                        <img src={require('../img/profile.jpg')} alt='profile' className='profilepic' />
                    </div>
                </div>


                <div className="row">
                    <div className="SocialRow col-12">
                    <Social />
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Home;