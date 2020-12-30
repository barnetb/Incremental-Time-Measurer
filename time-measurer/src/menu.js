import React, { Component } from 'react'
import './App.css'

export default class Menu extends Component {
    constructor (props) {
        super(props)
        this.state = {
          width: '0%',
        }
    }
    
    openMenu = () => {
        this.setState({
            width: '100%',
        })
    }

    closeMenu = () => {
        this.setState({
            width: '0%',
        })
    }

    render() {
        return (
            <div class="overlay-menu">
                <div style={{ textAlign: "left"}}>
                    <span class="menu-btn" style={{ fontSize: "30px", cursor: "pointer"}} onClick={() => this.openMenu()}>&#9776; Menu</span>
                </div>
                {/* the overlay */}
                <div id="myNav" class="overlay" style={{ width: this.state.width }}>
                    {/* button to close the overlay navigation */}
                    <a href="javascript:void(0)" class="closebtn" onClick={() => this.closeMenu()}>&times;</a>
                    {/* overlay content */}
                    <div class="overlay-content">
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                {/* <span onclick="openNav()">open</span> */}
            </div>
        )
    }
}