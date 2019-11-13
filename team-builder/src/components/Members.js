import React from "react";

const Members = (props) => {
    return (
        <div className="member-list">
            {props.memberList.map((member) => {
                return (
                    <div className="member" key={member.id}>
                        <h1>{member.name}</h1>
                        <h2>{member.email}</h2>
                        <p>{member.role}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Members;