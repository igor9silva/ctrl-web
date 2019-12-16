import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';

const App: React.FC = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#dashboard">CTRL</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#dashboard">Dashboard</Nav.Link>
					<Nav.Link href="#accounts">Accounts</Nav.Link>
					<Nav.Link href="#transactions">Transactions</Nav.Link>
					<Nav.Link href="#quotes">Quotes</Nav.Link>
					<Nav.Link href="#settings">Settings</Nav.Link>
				</Nav>
				<Image src="/user.png" width={35} height={35} roundedCircle />
			</Navbar>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
					<th>#</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Username</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
	  </>
	);
}

export default App;
