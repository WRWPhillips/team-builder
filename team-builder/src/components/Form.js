import React, { useState } from 'react';

export default function TeamForm(props) {
    const { values, update, submit } = props;
    console.log(props);
    const [member, setMember] = useState({name: "", email: "", role: "", ssn: ""})

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-cointainer inputs'>
                <label>Employee Name
                    <input
                        name="name"
                        type="text"
                        placeholder="Please submit your name"
                        maxLength="30"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label>Your Email
                    <input
                        name="email"
                        type="email"
                        placeholder="Tell us your email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Desired Role
                    <input
                        name="role"
                        type="text"
                        placeholder="What is you desired role here at Barrelcorp?"
                        maxLength="30"
                        value={values.role}
                        onChange={onChange}
                    />
                </label>
                <label>Social Security Number
                    <input
                        name="ssn"
                        type="text"
                        placeholder="Give us the number! Background checks or something"
                        maxLength="30"
                        value={values.ssn}
                        onChange={onChange}
                    />
                </label>
                
                <div className='submitbutton'>
                    <button onClick={onSubmit}>Submit!</button>
                </div>
            </div>
        </form>
    )
}