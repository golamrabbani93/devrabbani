/* eslint-disable @next/next/no-img-element */
import {cn} from '@/lib/utils';
import {Marquee} from '@/components/magicui/marquee';
import {testimonials} from '@/data/testimonials';

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({image, name, title}: {image: string; name: string; title: string}) => {
	return (
		<figure
			className={cn(
				'relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4',
				// light styles
				'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
				// dark styles
				'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img className="rounded-full" width="32" height="32" alt="" src={image} />
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
					{/* <p className="text-xs font-medium dark:text-white/40">{role}</p> */}
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{title}</blockquote>
		</figure>
	);
};

export function MarqueeDemoVertical() {
	return (
		<div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2">
			<div className="relative flex  w-full flex-row items-center justify-center overflow-hidden">
				<Marquee pauseOnHover vertical className="[--duration:20s]">
					{firstRow.map((review) => (
						<ReviewCard key={review.name} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover vertical className="[--duration:20s]">
					{secondRow.map((review) => (
						<ReviewCard key={review.name} {...review} />
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
			</div>
		</div>
	);
}
