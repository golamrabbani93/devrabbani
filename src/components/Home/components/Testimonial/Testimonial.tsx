/* eslint-disable @next/next/no-img-element */
import {Marquee} from '@/components/magicui/marquee';
import React from 'react';

const testimonials = [
	{
		name: 'Lena Torres',
		role: 'Product Lead • Creatify',
		image: 'https://randomuser.me/api/portraits/women/32.jpg',
		title: 'A frontend developer who transforms visions into reality',
		text: 'Aayush has an exceptional ability to bring our design concepts to life. His attention to detail and dedication to creating seamless user experiences have greatly enhanced our projects.',
		gradient: 'bg-gradient-to-b from-pink-300 to-gray-500 text-black',
	},
	{
		name: 'Emma Thompson',
		role: 'Senior Designer • PixelCraft',
		image: 'https://randomuser.me/api/portraits/women/42.jpg',
		title: 'Efficient, innovative, and a pleasure to work with',
		text: 'Working with Aayush has been a fantastic experience. He’s not only highly skilled in frontend technologies but also brings a refreshing creativity to every project.',
		gradient: 'bg-gradient-to-b from-blue-400 to-blue-800 text-white',
	},
	{
		name: 'Ethan Parker',
		role: 'Manager • TechFusion',
		image: 'https://randomuser.me/api/portraits/men/46.jpg',
		title: 'A reliable developer with a keen eye for detail',
		text: 'Aayush delivered exceptional work on our project. His meticulous approach and strong communication skills greatly enhanced the quality of our web applications.',
		gradient: 'bg-gradient-to-b from-purple-600 to-gray-900 text-white',
	},
	{
		name: 'Ryan Mitchell',
		role: 'CTO • Innovate Solutions',
		image: 'https://randomuser.me/api/portraits/men/78.jpg',
		title: 'Consistent excellence in every project',
		text: 'Aayush is a standout frontend developer. His ability to deliver high-quality code and engaging user interfaces consistently makes him a valuable team member.',
		gradient: 'bg-gradient-to-b from-teal-600 to-teal-900 text-white',
	},
	{
		name: 'Emily Thompson',
		role: 'Creative Director • H. Studios',
		image: 'https://randomuser.me/api/portraits/women/97.jpg',
		title: 'A master of frontend development with a keen design sensibility',
		text: 'Aayush is a fantastic frontend developer! He took our requirements and turned them into something amazing.',
		gradient: 'bg-gradient-to-b from-green-600 to-green-900 text-white',
	},
];

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
