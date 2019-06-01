import React, { useState } from 'react';
import axios from 'axios';
import './AddStudent.css';

function AddStudent (props){
	const [name, setState] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		const student = { name: e.target.nameInput.value }
		axios.post('http://localhost:3001/students', student)
			.then(
				() => props.history.push('/students')
			);
	}

	return ( 
		<div>
			<form className="AddStudent-form" onSubmit={onSubmit}>
				<input 
					className="AddStudent-input"
					id="nameInput"
					type="text" 
					placeholder="Wpisz imię"

				/> 
				<input className="AddStudent-submit" type="submit"/> 
			</form>
		</div> 
	);


}

export default AddStudent;