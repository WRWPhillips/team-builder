import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import TeamCard from './components/TeamCard';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {id: 0, name: "Fred Johnson", email: "stolenvalor45@shrek.gov", role: "janitor"},
    {id: 1, name: "Felicia Gomez", email: "icantstopstealingexpensivehardcheesefromwalmart@pennstate.edu", role: "hog farmer"}
  ]);
  console.log(teamMembers[0].name);
  return (
    <ol className='team-list-container'>
      {
        teamMembers.map(member => {
          return (
            <TeamCard props={member}/>
          )  
        })
      }
    </ol>
  );
}

export default App;
