/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'webcademy.ru',
			},
		],
	},
};
export default nextConfig;
