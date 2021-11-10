import React from 'react'

function Header() {

    return(
       
        <header style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'grey'}}>
            <h1>WIKI STAR WARS</h1>
            <h3>May The Force Be With <strong>USERNAME</strong></h3>
            <button>Logout</button>
        </header>
    )
}

export default Header;