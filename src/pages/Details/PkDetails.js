import React from 'react';
import PropTypes from 'prop-types';
import {  NavLink } from 'react-router-dom';

const PkDetail = (props) => 
{
    console.log(props);
    return (
        <div>
            <h1>{props.match.params.id}</h1>
            <hr />
            <div>
            <nav>
                <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                
                </ul>
            </nav>
                
            </div>
        </div>
    )
}

export default PkDetail;