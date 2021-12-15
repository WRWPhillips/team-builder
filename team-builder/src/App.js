import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import TeamCard from './components/TeamCard';
import TeamForm from './components/Form';

const initialFormValues = {
  id: '',
  name: '',
  email: '',
  role: '',
  ssn: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {id: 0, name: "Fred Johnson", email: "stolenvalor45@shrek.gov", role: "janitor"},
    {id: 1, name: "Felicia Gomez", email: "icantstopstealingexpensivehardcheesefromwalmart@pennstate.edu", role: "hog farmer"}
  ]);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const member = {
      name: formValues.name,
      email: formValues.email.trim(),
      role: formValues.role,
      ssn: formValues.ssn
    }
    if (!member.name || !member.email || !member.role || !member.ssn) {
      setError("All fields are required!!!")
    } else {
      setTeamMembers([ ...teamMembers, {...member, id: teamMembers.length}]);
      setFormValues(initialFormValues);
      setError("");
    } 
  }


  console.log(teamMembers[0].name);
  return (
    <div className='App'>
        <div className='team-list-box'>
          <h3>Our Wonderful Team Members!!</h3>
          <ol className='team-list-container'>
            {
              teamMembers.map(member => {
                return (
                  <TeamCard props={member}/>
                )  
              })
            }
          </ol>
          <p>These folks work tirelessly to provide fast, ergonomic, dynamic, forward thinking, synergistic, results-oriented solutions to any problem we encounter here at Barrel Corp!</p>
        </div>
      <div className='team-form-container'>
          <h3>Apply for a career at Bjarrelcorp Enterprises!</h3>
          <h3>{error}</h3>
          <TeamForm
            values={formValues}
            update={updateForm}
            submit={submitForm}
          />
      </div>
    </div>
  );
}

export default App;
