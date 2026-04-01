import React from "react";
import './Usercard.css';

function Usercard({user}){

    const {name,email,phone,age,isActive}= user;
    return(
        <div className='user-card'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p className="user-age">Age: {age}</p>
            <p className={'user-status' +(isActive ? 'active' : 'inactive')}>
                Status: {isActive ? 'Active' : 'Inactive'}
            </p>
            <p>Account Created in: {new Date().getFullYear()-age}</p>
        </div>
    );
}

export default  Usercard;