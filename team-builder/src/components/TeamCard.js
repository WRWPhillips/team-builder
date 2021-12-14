import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamCard(props){
    const details = props.props;
    console.log(details);
    console.log(props.props);
    return (
        <li className='team-list-item'>
            Name: {details.name}, Role: {details.role}, Contact: {details.email}. 
        </li>
    )
}