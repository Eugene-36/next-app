'use client';
async function getMessageFromAPI() {
	const res = await fetch('/api/hello', {
		cache: 'no-store', // for SSR
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}
const ButtonGetRequest = () => {
	const clickHandler = async () => {
		const { message } = await getMessageFromAPI();
		alert(message);
	};
	return (
		<button onClick={clickHandler} className="btn btn-ghost">
			Make Get Request (click event)
		</button>
	);
};

export default ButtonGetRequest;
