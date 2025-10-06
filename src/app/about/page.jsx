import Image from 'next/image';

export const metadata = {
	title: 'About page',
	description: 'This is about page',
};

const AboutPage = () => {
	return (
		<section className="content">
			<h2 className="section-title">Section title</h2>
			<p>
				Next.js simplifies the development process by providing built-in
				routing, automatic code splitting, and seamless integration with
				popular tools. Its flexible architecture allows developers to
				choose between static and dynamic rendering, making it suitable
				for a wide range of projects from personal blogs to
				enterprise-level applications.
			</p>
			<Image
				src="/dodge-400-200.jpg"
				alt="Dodge"
				width="400"
				height="200"
				priority
			/>
			<br />
			<br />
			<Image
				src="https://webcademy.ru/blog/wp-content/uploads/2023/07/Travel-X-Cover-870x400.jpg"
				alt="Image"
				width={870}
				height={400}
				priority
				unoptimized
			/>
		</section>
	);
};

export default AboutPage;
