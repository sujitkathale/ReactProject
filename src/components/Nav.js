import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Nav extends Component {
    render() {
        return (
            <>       
                <nav class="nav">
                    <Link to="/" class="nav-link">Home</Link>
                    <Link to="/products" class="nav-link">Product</Link>
                    <Link to="/course" class="nav-link">Course</Link>
                    <Link to="/enquiry" class="nav-link">Enquiry</Link>
                </nav>
            </>
        )
    }
}

export default Nav
