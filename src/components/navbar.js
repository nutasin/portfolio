import React, { Component } from 'react'
import NavItems from './navitems'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }


    activeitem = (item) => {
        if(this.state.NavItemActive.length > 0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
            document.getElementById(this.state.NavItemActive).childNodes[0].style.color = "white";
        }
        this.setState({ 'NavItemActive': item}, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
            document.getElementById(this.state.NavItemActive).childNodes[0].style.color = "#69448E";
        })
    }

    render()
    {

        return(
            <nav>
                <ul>
                    <NavItems item="Home" activenav={this.activeitem} tolink="/"></NavItems>
                    <NavItems item="Experience" activenav={this.activeitem} tolink="/experience"></NavItems>
                    <NavItems item="Education" activenav={this.activeitem} tolink="/education"></NavItems>
                    <NavItems item="Skill" activenav={this.activeitem} tolink="/skill"></NavItems>
                    <NavItems item="Contact" activenav={this.activeitem} tolink="/contact"></NavItems>
                </ul>
            </nav>
        )
    }
}

export default Navbar;