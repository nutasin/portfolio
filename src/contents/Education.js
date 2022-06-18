import React, { Component } from 'react'
import Pic from '../img/ictmahidol.jpg'
import Widecard from '../components/widecard'
import Social from '../components/social'

class Education extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className='subTopic'>EDUCATION</h1>
                <div className='condiv education'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Widecard title="Bachelor's degree of science " major="Software Engineering Track" faculty="Faculty of Information and Communication Technology (ICT)" where="Mahidol University" GPAX="Graduated with GPAX 3.00" from="2017" to="2021"></Widecard>
                            <img src={require('../img/MUICT_LOGO.png')} alt='profile' className='logoPic' />
                        </div>
                        <div className='col-md-6'>
                            <div className='card'>
                                <img src={require('../img/ictmahidol.jpg')} alt='profile' className='educationPic' />
                            </div>
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

export default Education;