import React from 'react';
import StudentItem from './StudentItem';
import styled from 'styled-components';

const MyList = styled.ul`
	list-style-type: none;
	text-align: left;
	padding-left: 0;
`;

function StudentsList({ students, onDeleted }){
	//zamiast props uzywam destructuring i wyciagamy obiekt
	return (
		<MyList>
			{students.map(s => <StudentItem key={s.id} student={s} onDeleted={onDeleted}/>)}
		</MyList>
	)
}

export default StudentsList;