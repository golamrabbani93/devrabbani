import {BentoCard} from '@/components/magicui/bento-grid';
import {Marquee} from '@/components/magicui/marquee';
import {cn} from '@/lib/utils';
import {FileTextIcon} from '@radix-ui/react-icons';

const files = [
	{
		name: 'Subscription Management',
		body: 'Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to enhance user experience.',
	},
	{
		name: 'Analytics Dashboard',
		body: 'Provides real-time insights into user behavior, system performance, and key business metrics.',
	},
	{
		name: 'Brand Identity',
		body: 'Unified design assets, including logos and themes, ensuring consistent branding across the platform.',
	},
	{
		name: 'API Documentation',
		body: 'Guides developers to integrate with the SaaS platform efficiently, offering examples and best practices.',
	},
	{
		name: 'User Onboarding',
		body: 'Step-by-step guides and interactive tutorials to help users get started and maximize platform benefits.',
	},
];

const features = [
	{
		Icon: FileTextIcon,
		name: 'The Inside Scoop',
		description: 'Currently building a Saas Application',
		href: '/work',
		cta: 'View Recent work',
		className: 'col-span-3 lg:col-span-1',
		background: (
			<Marquee
				pauseOnHover
				className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
			>
				{files.map((f, idx) => (
					<figure
						key={idx}
						className={cn(
							'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
							'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
							'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
							'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none',
						)}
					>
						<div className="flex flex-row items-center gap-2">
							<div className="flex flex-col">
								<figcaption className="text-sm font-medium dark:text-white ">{f.name}</figcaption>
							</div>
						</div>
						<blockquote className="mt-2 text-xs">{f.body}</blockquote>
					</figure>
				))}
			</Marquee>
		),
	},
];

export function FeatureCards() {
	return (
		<div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-6 lg:col-span-4">
			<div className="size-full">
				{features.map((feature, idx) => (
					<BentoCard key={idx} {...feature} />
				))}
			</div>
		</div>
	);
}
