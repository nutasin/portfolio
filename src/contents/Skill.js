import React, { Component } from 'react'
import Social from '../components/social'

class Skill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'mySkills': ['C# .NET core 3.1', 'HTML', 'CSS', 'jQuery', 'JavaScript', 'Python, Django framework', 'Software Engineering', 'MySQL', 'C, C#', 'Java'],
            'mySkills2': [' React JS', 'Flutter']
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 className='subTopic'>SKILLS</h1>
                <div className='condiv skill'>
                    <div className='row skillRow'>
                        <div className='col-md-3 ulExpSkill'>
                        <label id='labelSkill'>Experienced Skills</label>
                        </div>
                        <div className='col-md-9'>
                            <ul className='ulExpSkill'>
                                <li>
                                    <div className='row rowBox'>
                                        <img src={require('../img/c-sharp.png')} alt='profile' className='iconPic' />
                                    </div>
                                    <div className='row rowBox'>
                                        <label>C# .NET core 3.1</label>
                                    </div>

                                </li>
                                <li>
                                    <div className='row rowBox'>
                                        <img src={require('../img/html.png')} alt='profile' className='iconPic' />
                                    </div>
                                    <div className='row rowBox'>
                                        <label>HTML</label>
                                    </div>

                                </li>
                                <li>
                                    <div className='row rowBox'>
                                        <img src={require('../img/css-3.png')} alt='profile' className='iconPic' />
                                    </div>
                                    <div className='row rowBox'>
                                        <label>CSS</label>
                                    </div>

                                </li>
                                <li>
                                    <div className='row rowBox'>
                                        <img src={require('../img/javascript.png')} alt='profile' className='iconPic' />
                                    </div>
                                    <div className='row rowBox'>
                                        <label>jQuery</label>
                                    </div>

                                </li>
                                <li>
                                    <div className='row rowBox'>
                                        <img src={require('../img/js.png')} alt='profile' className='iconPic' />
                                    </div>
                                    <div className='row rowBox'>
                                        <label>JavaScript</label>
                                    </div>

                                </li>

                                <li>
                                    <div className='row rowBox'>
                                        <img src={require('../img/python.png')} alt='profile' className='iconPic' />
                                    </div>
                                    <div className='row rowBox'>
                                        <label>Python, Django</label>
                                    </div>

                                </li>
                                <li>
                                    <div className='row rowBox'>
                                        <img src={require('../img/dev.png')} alt='profile' className='iconPic' />
                                    </div>
                                    <div className='row rowBox'>
                                        <label>Software Engineer</label>
                                    </div>

                                </li>
                                <li>
                                    <div className='row rowBox'>
                                        <img src={require('../img/mysql.png')} alt='profile' className='iconPic' />
                                    </div>
                                    <div className='row rowBox'>
                                        <label>MySQL</label>
                                    </div>

                                </li>
                                <li>
                                    <div className='row rowBox'>
                                        <img src={require('../img/letter-c.png')} alt='profile' className='iconPic' />
                                    </div>
                                    <div className='row rowBox'>
                                        <label>C, C#</label>
                                    </div>

                                </li>
                                <li>
                                    <div className='row rowBox'>
                                        <img src={require('../img/java.png')} alt='profile' className='iconPic' />
                                    </div>
                                    <div className='row rowBox'>
                                        <label>Java</label>
                                    </div>

                                </li>

                            </ul>
                        </div>

                    </div>
                    <div className='row skillRow2'>
                        <div className='col-md-3 '>
                        <label id='labelSkill'>Skills being practiced</label>
                        </div>
                        <div className='col-md-9'>
                        <ul className=''>
                                <li>
                                    <div className='row rowBox'>
                                        <img src={require('../img/react.png')} alt='profile' className='iconPic' />
                                    </div>
                                    <div className='row rowBox'>
                                        <label>ReactJS</label>
                                    </div>

                                </li>
                                <li>
                                    <div className='row rowBox'>
                                        <img src={require('../img/flutter.png')} alt='profile' className='iconPic' />
                                    </div>
                                    <div className='row rowBox'>
                                        <label>Flutter</label>
                                    </div>

                                </li>
                            </ul>
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

export default Skill;