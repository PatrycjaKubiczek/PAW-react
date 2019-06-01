import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import logo from './logo.svg';

import LandingPage from './LandingPage';
import Contact from './Contact';
import Students from './Students';
import NotFound from './NotFound';
import Header from './Header';
import AddStudent from './AddStudent';
import Navbar from './Navbar';

import './App.css';

function App() {
  return (
	<div className="App">
		<Header className="App-header">
			<p>
				Welcome to PAW AGH
			</p>
		 </Header>
		<Router>
			{/*<> //czyli React fragement - skrotowy zapis dla <React.Fragment>*/}
				<Navbar />
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/students" component={Students} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/add-student" component={AddStudent} />
					<Route path="*" component={NotFound} />
				</Switch>
			{/*</>*/}
		</Router>
		
	</div>
  );
}

export default App;
