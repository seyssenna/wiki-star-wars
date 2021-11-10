import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {

    return(
        <ul style={{display: 'flex', backgroundColor: 'lightgrey', margin: 0, padding: '1em'}}>
            <Link to='/'>
                <li style={{marginLeft: 10, listStyle: 'none'}}>Users</li>
            </Link>
            <Link to='/Characters'>
                <li style={{marginLeft: 10, listStyle: 'none'}}>Characters</li>
            </Link>
            <Link to='/Ships'>
                <li style={{marginLeft: 10, listStyle: 'none'}}>Ships</li>
            </Link>
            <Link to='/Planets'>
                <li style={{marginLeft: 10, listStyle: 'none'}}>Planets</li>
            </Link>    
        </ul>
    )
}

export default Navigation;