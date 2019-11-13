import React, { useState } from "react";

const MemberForm = props => {
    const [member, setMember] = useState([{ name: "", email: "", role: "" }]);

    const changeHandler = (event) => {
        setMember({
            ...member, [event.target.name]: event.target.value
        });
    };

    const submitForm = (event) => {
        event.preventDefault();
        props.addNewMember(member);
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" onChange={changeHandler} placeholder="Your Name" value={member.name}></input>
            <label htmlFor="email">E-Mail</label>
            <input id="email" type="text" name="email" onChange={changeHandler} placeholder="Your E-Mail Address" value={member.email}></input>
            <label htmlFor="role">Role</label>
            <input id="role" type="text" name="role" onChange={changeHandler} placeholder="Your Role" value={member.role}></input>
            <button type="submit">Add Member</button>
        </form>
    );

};

export default MemberForm;