import React from 'react'
import Logo from "./Logo.png"

export default function Header() {
    return (
        <header>
            <h1>
                <img className="logo" src={Logo}/>
                <i class="fas fa-book"></i> Welcome! Search for a book below. <i class="fas fa-book"></i>
            </h1>
        </header>
    )
}
