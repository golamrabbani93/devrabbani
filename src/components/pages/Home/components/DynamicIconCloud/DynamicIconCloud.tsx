import {useTheme} from 'next-themes';
import Link from 'next/link';
import React from 'react';
import {Cloud, renderSimpleIcon, fetchSimpleIcons, SimpleIcon} from 'react-icon-cloud';

const useIcons = (slugs: string[]) => {
	const {resolvedTheme} = useTheme();
	const color = resolvedTheme === 'dark' ? '#ffffff' : '#000000';

	const [icons, setIcons] = React.useState<SimpleIcon[] | null>(null);
	React.useEffect(() => {
		fetchSimpleIcons({slugs}).then((data) => {
			const iconsArray = Object.values(data.simpleIcons);
			const updatedIcons = iconsArray.map((icon) => {
				// add gihub and next js
				switch (icon.title) {
					case 'GitHub':
						icon.hex = color;
						break;
					case 'Next.js':
						icon.hex = color;
						break;
					case 'Express':
						icon.hex = color;
						break;
					case 'Vercel':
						icon.hex = color;
						break;
					case 'Amazon Web Services':
						icon.hex = color;
						break;
					case 'shadcn/ui':
						icon.hex = '#ffffff';
						break;
					default:
						icon.hex = icon.hex;
				}

				return icon;
			});
			setIcons(updatedIcons);
		});
	}, [slugs, color]);

	if (icons) {
		return icons.map((icon) =>
			renderSimpleIcon({
				icon,
				size: 90,
				fallbackHex: color, // Fallback color based on theme
				aProps: {
					onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
				},
			}),
		);
	}

	return <a>Loading</a>;
};

const slugs = [
	'typescript',
	'javascript',
	'react',
	'nextdotjs',
	'nodedotjs',
	'zod',
	'android',
	'html5',
	'css3',
	'express',
	'prisma',
	'mongodb',
	'amazonwebservices',
	'postgresql',
	'nginx',
	'vercel',
	'jest',
	'docker',
	'git',
	'github',
	'pnpm',
	'npm',
	'shadcnui',
	'tailwindcss',
	'framer',
	'reacthookform',
	'mysql',
	'expo',
	'clerk',
	'linux',
	'yarn',
	'antd',
];

const DynamicIconCloud = () => {
	const icons = useIcons(slugs);

	return (
		<div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2">
			<div className="size-full">
				<div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]">
					<div className="absolute -top-52 left-0 -z-1 min-w-full scale-[1.3] md:-top-20 md:z-15 lg:-top-12">
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%',
								paddingTop: '100px',
								height: '100%',
								// margin: '200px', // Adjust margin for the container
								backgroundColor: '#121212',
							}}
						>
							<Cloud
								canvasProps={{
									className: 'size-full',
								}}
								options={{
									clickToFront: 0,
									depth: 0.2, // Adjust the depth of the cloud
									shape: 'sphere', // Change the shape of the cloud
									minSpeed: 0.16, // Control the minimum rotation speed
									initial: [0.06, -0.06], // Start rotating automatically
									maxSpeed: 0.16, // Control the maximum rotation speed
									outlineMethod: 'none',
									wheelZoom: false,
									zoomMax: 10, // Control the maximum zoom level
									zoom: 0.9, // Initial zoom level
									activeCursor: 'pointer',
									animTiming: 'Smooth',
								}}
							>
								{icons}
							</Cloud>
						</div>
					</div>
				</div>
			</div>
			<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
				<h3 className="max-w-lg text-neutral-400">Tech Enthusiast</h3>
				<p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
					Passionate about cutting-edge development technologies
				</p>
			</div>
			<div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
				<Link
					href="/about"
					className="inline-flex items-center justify-center gap-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 pointer-events-auto"
				>
					Know more
				</Link>
			</div>
			<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
		</div>
	);
};

export default DynamicIconCloud;
