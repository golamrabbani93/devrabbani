import {Marquee} from '@/components/magicui/marquee';
import Image from 'next/image';

const MarqueeText = () => {
	const itemText = [
		'Responsive',
		'Interactive',
		'Dynamic',
		'Fast',
		'Cross-Browser',
		'SEO-Friendly',
		'Accessible',
		'Modern',
		'Reusable',
		'End-to-End',
		'Database-Optimized',
	];
	return (
		<section className="my-20 py-20">
			{/* marquee bottom   */}
			<div className="z-0 translate-y-10 rotate-6 bg-gradient-to-r from-[#6799fe] to-[#0255fb] py-4 opacity-60 md:rotate-3 lg:translate-y-16 lg:py-8"></div>
			{/* marquee Top Line */}
			<div className="z-2 -mx-1 flex -rotate-3 items-center justify-center overflow-x-clip bg-gradient-to-r from-[#6799fe] to-[#0255fb] py-1.5 lg:py-3">
				<div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:30s] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] relative">
					{/* Marquee Content */}
					<Marquee>
						{itemText.map((text, idx) => (
							<div key={idx} className="inline-flex items-center gap-2 lg:gap-4">
								<span className="text-sm font-semibold uppercase leading-6 tracking-[0.2em] text-gray-50 md:text-lg lg:text-xl">
									{text}
								</span>
								<Image
									src={'/images/star.svg'}
									className="w-5 lg:w-7"
									width={28}
									height={28}
									alt="start"
								/>
							</div>
						))}
					</Marquee>

					{/* Glow Effect */}
					<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				</div>
			</div>
		</section>
	);
};

export default MarqueeText;
