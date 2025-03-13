import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	//add url for image
	images: {
		// dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.simpleicons.org',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
		],
	},
};

export default nextConfig;
