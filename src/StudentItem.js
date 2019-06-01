import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

import './StudentItem.css'
const RemoveButton = styled.button`
	float: right;
	display: block;
	background: darkred;
	padding: 10px;
	color: white;
	border: 0;
	cursor: pointer;
	transition: background .1s ease-out;
	&:hover {
		cursor: pointer;
		background: red;
	}
`;
const StudentItemLi = styled.li`
	text-align: left;
	border: 1px solid #000;
	margin: 2px;
`;
const StudentItemId = styled.div`
	display: inline-block;
	padding: 10px;
`;

const StudentItemName = styled.div`
	display: inline-block;
	padding: 10px;
`;
function StudentItem({ student, onDeleted }){

	function onClick (){
		axios.delete(`http://localhost:3001/students/${student.id}`)
			.then(
				() => onDeleted(student)
			);

	}
	//zamiast props uzywam destructuring i wyciagamy obiekt
	return (
		<StudentItemLi>
			<StudentItemId>{student.id}</StudentItemId>
			<StudentItemName>{student.name}</StudentItemName>
			<RemoveButton onClick={onClick}>usuń</RemoveButton> 
		</StudentItemLi>
	)
}

export default StudentItem;