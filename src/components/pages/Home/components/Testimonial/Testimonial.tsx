/* eslint-disable @next/next/no-img-element */
import {Marquee} from '@/components/magicui/marquee';
import {testimonials} from '@/data/testimonials';
import React from 'react';

const Testimonials = () => {
	return (
		<section className="my-32 md:mt-52 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
			<h2 className="z-2 relative text-center text-4xl md:text-5xl mt-44 md:mt-28 mb-16 mx-12 md:mx-2 text-shadow-lg">
				<p className="mb-4 text-xs uppercase tracking-widest text-white/70 md:text-sm">
					TESTIMONIALS
				</p>
				<span>Word on the street</span>{' '}
				<span className="text-colorfull animate-gradient-x font-nyght tracking-wide">about me</span>
			</h2>
			<div className="mx-auto w-full overflow-hidden">
				<div className="flex gap-4 overflow-x-auto px-4">
					<Marquee>
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className={`pointer-events-none relative flex flex-col justify-between p-5 md:p-6 rounded-3xl w-[300px] md:w-[400px] h-[370px] md:h-[440px] cursor-pointer transition-all duration-300 hover:-rotate-2 border ${testimonial.gradient}`}
							>
								<div>
									<p className="mb-5 text-lg font-bold tracking-wide md:text-xl">
										{testimonial.title}
									</p>
									<span className="text-base font-extralight tracking-tight md:text-lg">
										{testimonial.text}
									</span>
								</div>
								<div className="flex items-center gap-4">
									<img
										className="size-11 md:size-14 rounded-full"
										src={testimonial.image}
										alt={testimonial.name}
									/>
									<div className="flex flex-col">
										<span className="text-base font-bold tracking-wide md:text-xl">
											{testimonial.name}
										</span>
										<p className="text-sm opacity-80 md:text-base">{testimonial.role}</p>
									</div>
								</div>
							</div>
						))}
					</Marquee>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
