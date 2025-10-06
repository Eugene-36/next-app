'use client';

const Button = () => {
	return (
		<button onClick={() => alert('Here we go!')} className="btn btn-ghost">
			Click me (click event)
		</button>
	);
};

export default Button;
