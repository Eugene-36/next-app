import { notFound } from 'next/navigation';

const getDetailedUserInfo = async (id) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}`,
		{ cache: 'no-store' },
	);
	if (response.status === 404) notFound();
	const data = await response.json();
	return data;
};

const UsersPage = async ({ params }) => {
	const { id } = await params;
	const userDetails = await getDetailedUserInfo(id);

	return (
		<section>
			<h2 className="section-title">User #{userDetails?.id}</h2>

			<div className="card card--user-details">
				<span className="muted">Name</span>
				<span>{userDetails?.name}</span>

				<span className="muted">Username</span>
				<span>{userDetails?.username}</span>

				<span className="muted">Email</span>
				<span>{userDetails?.email}</span>

				<span className="muted">Phone</span>
				<span>{userDetails?.phone}</span>

				<span className="muted">Website</span>
				<span>{userDetails?.website}</span>

				<span className="muted">Company</span>
				<span>{userDetails?.company?.name}</span>

				<span className="muted">Address</span>
				<span>
					{userDetails?.address?.street},{' '}
					{userDetails?.address?.suite}, {userDetails?.address?.city}
				</span>
			</div>
		</section>
	);
};

export default UsersPage;
