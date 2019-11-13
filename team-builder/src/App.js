import React, { useState } from 'react';
import './App.css';
import MemberForm from "./components/Form";
import Members from "./components/Members";

function App() {

  const [memberList, setMemberList] = useState([
    {
      id: 1,
      name: "Tanner",
      email: "tanner122000@gmail.com",
      role: "Web Developer"
    },
    {
      id: 2,
      name: "Tanner 2: Electric Boogaloo",
      email: "tanner1220002@gmail.com",
      role: "Evil doppleganger"
    }
  ]);

  const addNewMember = (member) => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMemberList([...memberList, newMember])
  };

  return (
    <div className="App">
      <MemberForm addNewMember={addNewMember} />
      <Members memberList={memberList} />
    </div>
  );
}

export default App;
