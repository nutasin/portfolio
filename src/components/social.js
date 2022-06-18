import React, { Component } from 'react'
import Home from '../contents/Home'

class Social extends Component {
    render()
    {
        return (
            <div className='social'>
                <a href='https://line.me/ti/p/SW78dZzdQ9' target="_blank" rel="noopener noreferrer"><i className='fab fa-line'></i></a>
                <a href='https://www.instagram.com/nutasin.sj/?fbclid=IwAR06tGfXunemi2isOVMMLfL6S40vlN49Kj4St5L8g4zVImQu1jcz8hWSluU' target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram'></i></a>
                <a href='https://www.facebook.com/natzaz.sawanjit/' target="_blank" rel="noopener noreferrer"><i className='fab fa-facebook'></i></a>
                <a href='https://www.linkedin.com/in/nutasin-sawanjit-67287b198/' target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
            </div>
        )
    }
}

export default Social;