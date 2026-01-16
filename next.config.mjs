/** @type {import('next').NextConfig} */

const nextConfig = {
	output: 'export', // Enable static export
	basePath: '/OPMandira', // Replace with your repository name
	images: {
		unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	allowedDevOrigins: ["*.theopenbuilder.com"],
};

export default nextConfig;
