import React, { Component } from 'react'


class Widecard extends Component {
    render() {
        return (
            <div className='widecard'>
              <div className='wide-con'>
              <h2 className='firstText'>{this.props.title}</h2>
                <h3 className='secondText'>{this.props.faculty}</h3>
                <h3 className='secondText'>{this.props.GPAX} | {this.props.major}</h3>
                <h4 className='thirdText'>{this.props.from} - {this.props.to} | {this.props.where} </h4>
              </div>
            </div>
        )
    }
}

export default Widecard;