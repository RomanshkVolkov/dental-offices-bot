/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ["cdn.dribbble.com"],
	},
};

export default nextConfig;
