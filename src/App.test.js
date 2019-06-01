import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('world is not insane', ()=> {
	expect(2+2).toEqual(4);
})


it('shallow renders App', () => {
	const app = shallow(<App />);
	const routes = app.find(Route)
	expect(routes.length).toEqual(5)
})