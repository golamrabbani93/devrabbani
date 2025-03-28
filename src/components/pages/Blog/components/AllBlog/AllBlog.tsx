import {blogData} from '@/data/blogData';
import Image from 'next/image';

const AllBlog = () => {
	return blogData.map((post) => (
		<a
			key={post.id}
			className="group mx-auto flex max-w-3xl flex-col gap-4 border-b border-dashed px-0 py-10 lg:flex-row-reverse lg:items-center"
			href={post.href}
		>
			<div className="relative z-1 h-44 w-auto overflow-hidden rounded-sm lg:h-28 lg:w-full lg:max-w-48">
				<Image
					alt={post.image.alt}
					loading="lazy"
					decoding="async"
					className="bg-center object-cover transition-transform duration-300 group-hover:scale-110"
					sizes="100vw"
					src={post.image.src}
					layout="fill"
				/>
			</div>
			<div className="w-full">
				<div className="flex items-center gap-3">
					<p className="text-sm text-white/60">{post.date}</p>
					<span className="rounded-sm bg-gray-100 px-1.5 py-0.5 text-xs text-gray-700 dark:bg-emerald-900/25 dark:text-green-400">
						{post.status}
					</span>
				</div>
				<h3 className="relative mt-3 text-xl font-bold">{post.title}</h3>
				<p className="mt-1 text-sm text-white/75">{post.description}</p>
				<div className="mt-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
					<div className="flex items-center gap-5">
						<div className="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="15"
								height="15"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-clock text-green-400"
							>
								<circle cx="12" cy="12" r="10"></circle>
								<polyline points="12 6 12 12 16 14"></polyline>
							</svg>
							<p className="text-xs">{post.readTime}</p>
						</div>
					</div>
					<div className="flex flex-wrap gap-x-2 gap-y-1 text-xs lg:text-sm">
						{post.tags.map((tag, index) => (
							<span
								key={index}
								className="rounded-sm bg-gray-100/80 px-1.5 py-0.5 text-gray-700 dark:bg-neutral-900/60 dark:text-neutral-500"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</a>
	));
};

export default AllBlog;
