import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavItems extends Component {
    componentDidMount() {
        document.getElementById("aMenu").click()
      }
    render() {
        return (
            <li id={this.props.item}>
                <Link id="aMenu" to={this.props.tolink} onClick={this.props.activenav.bind(this, this.props.item)}>{this.props.item}</Link>
            </li>
        )
        
    }


}

export default NavItems;
