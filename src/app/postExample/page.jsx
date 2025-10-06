import { createHelloGreeting } from '@/lib/hello';

const PostExample = () => {
	const response = createHelloGreeting('Yevhen');
	return (
		<section className="content">
			<h2 className="section-title">Post request</h2>
			{response && <p className="message">{response.message}</p>}
		</section>
	);
};

export default PostExample;
