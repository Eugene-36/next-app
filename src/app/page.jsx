import Button from '@/components/Button';
export const metadata = {
	title: 'Next.js Example',
	description:
		'A simple Next.js app to demonstrate API routes and data fetching',
	keywords: ['Next.js', 'React', 'API routes', 'Data fetching'],
};

export default function Home() {
	return (
		<section className="content">
			<h1>Next.js Header</h1>
			<p>
				Next.js is a powerful React framework for building fast and
				scalable web applications. It offers features like server-side
				rendering, static site generation, API routes, and optimized
				performance out of the box. With Next.js, developers can easily
				create modern websites and applications with improved SEO and
				user experience.
			</p>
			<Button />
		</section>
	);
}
