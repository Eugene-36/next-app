import Link from 'next/link';
const fetchUsers = async () => {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users',
			{ revalidate: 60 }, // ISR - revalidate this data every 60 seconds
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching users:', error);
	}
};

const UserItem = ({ user }) => {
	const { id, name, email } = user;
	return (
		<Link href={`/users/${id}`} className="item">
			<div>
				<div className="item-title">{`${id}. ${name}`}</div>
				<div className="item-sub">{email}</div>
			</div>
			<span aria-hidden></span>
		</Link>
	);
};

const UsersPage = async () => {
	const users = await fetchUsers();
	return (
		<section className="content">
			<h2 className="section-title">Users</h2>
			{users?.length === 0 && <p>No users found.</p>}
			<div className="users-list">
				{users?.length > 0 && (
					<ul>
						{users.map((user) => (
							<UserItem key={user.id} user={user} />
						))}
					</ul>
				)}
			</div>
		</section>
	);
};

export default UsersPage;
