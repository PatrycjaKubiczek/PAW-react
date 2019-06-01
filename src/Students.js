import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios';
import StudentsList from './StudentsList';
import './Students.css';

// const STUDENTS = [
// 	{id: 1, name: "Karol Majta"},
// 	{id: 2, name: "Anna Nowak"},
// 	{id: 3, name: "Jan Kowalski"},
// 	{id: 4, name: "Patrycja Kubiczek"}
// ]

function Students (props){
  const [isLoading, setIsLoading] = useState(true);
  const [students, setStudents] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/students')
      .then (
        (response) => {
          setStudents(response.data);
          setIsLoading(false);
        },
        (error) => {
          setErrorMessage('Nie udało się zalogować danych');
          setIsLoading(false);
        }
      )

  }, [])
  const onDeleted = (student) => {
    setStudents(oldStudents => oldStudents.filter(s => s.id !== student.id))
  }

  // const onSuccesClick = () => {
  // 	// setStudents(STUDENTS);
  // 	// setIsLoading(false);
  // }

  // const onFailureClick = () => {
  // 	setErrorMessage('Error msg')
  // 	setIsLoading(false)
  // }

  return (
  	<div>
      <div>
        <Link 
          to="/add-student" 
          href='/add-student' 
          className="addStudent-btn"
          style={{
            display: 'block',

          }}
        >
          Dodaj studenta
        </Link>
      </div>
  		{isLoading
  			? <div><p>Ładowanie danych</p></div>
  			: errorMessage !== null
  				? <div>nie udało się załadować danych {errorMessage}</div> 
  				: <StudentsList students={students} onDeleted={onDeleted} />		
  		}
  	</div>
  )
}

export default Students;