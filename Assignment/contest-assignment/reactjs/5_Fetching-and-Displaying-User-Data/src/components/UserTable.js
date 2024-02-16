import React, { useState, useEffect } from "react";

function UserTable() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => {
				// Sort the data by ID number in ascending order
				const sortedData = data.sort((a, b) => a.id - b.id);
				setUsers(sortedData);
			})
			.catch((error) => {
				console.error("Error fetching users: ", error);
			});
	}, []);

	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Website</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.phone}</td>
						<td>{user.website}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default UserTable;
