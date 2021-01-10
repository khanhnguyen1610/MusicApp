import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import ListView from './ListView'

function Header() {
    return (
        <div >
            <div className='Header'>
            <div className='Side-bar'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='Side-bar'>
                    <Link to='/'>Add New Song</Link>
                </div>
                <div className='Side-bar'>
                    <Link to='/ListView'>Songs</Link>
                </div>
            </div>
                <ListView />
        </div>
    )
}

export default Header
