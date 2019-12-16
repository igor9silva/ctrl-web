import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const App: React.FC = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#dashboard">CTRL</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#dashboard">Dashboard</Nav.Link>
				<Nav.Link href="#accounts">Accounts</Nav.Link>
				<Nav.Link href="#transactions">Transactions</Nav.Link>
				<Nav.Link href="#quotes">Quotes</Nav.Link>
				<Nav.Link href="#settings">Settings</Nav.Link>
			</Nav>
			<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-info">Search</Button>
			</Form>
		</Navbar>
	);
}

export default App;
