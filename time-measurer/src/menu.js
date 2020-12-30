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
            <div>
                <div style={{ textAlign: "left"}}>
                    <span class="menu-btn" style={{ fontSize: "30px", cursor: "pointer"}} onClick={() => this.openMenu()}>&#9776; Menu</span>
                </div>
                {/* the overlay */}
                <div id="myNav" class="overlay" style={{ width: this.state.width }}>
                    {/* button to close the overlay navigation */}
                    <a href="javascript:void(0)" class="closebtn" onClick={() => this.closeMenu()}>&times;</a>
                    {/* overlay content */}
                    <div class="overlay-content">
                        <a href="javascript:void(0)">About</a>
                        <a href="javascript:void(0)">Services</a>
                        <a href="javascript:void(0)">Clients</a>
                        <a href="javascript:void(0)">Contact</a>
                    </div>
                </div>
                {/* <span onclick="openNav()">open</span> */}
            </div>
        )
    }
}