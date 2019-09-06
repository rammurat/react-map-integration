import React from 'react'
import {Link} from 'react-router-dom'
const image = require('../../src/static/images/error.jpg')

const Error = () => {
    return (
        <div className="container error">
            <h1>Page not found</h1>
            <p><Link to='/'><img src={image} alt='Error' width='200px'/></Link></p>
            <p><Link to='/'>Try new search...</Link></p>
        </div>
    )
}

export default Error