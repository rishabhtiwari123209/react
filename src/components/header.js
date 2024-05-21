import React from 'react'
import {Link} from 'react-router-dom'
const Header=()=>{
return (<header>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/register">register</Link></li>
            <li><Link to="/user">user</Link></li>
        </ul>
    </nav>
</header>)

}
export default Header;