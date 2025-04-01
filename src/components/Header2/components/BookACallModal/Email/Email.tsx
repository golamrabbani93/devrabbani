import {Calendar, Mail} from 'lucide-react';
import Link from 'next/link';

const Email = () => {
	return (
		<div className="grid grid-cols-1 gap-4 font-light sm:grid-cols-2">
			<Link
				href="mailto:devrabbani9@gmail.com?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Email Aayush Bharti"
				className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 cursor-pointer border border-input shadow-xs hover:text-accent-foreground h-9 px-4 py-2 w-full bg-zinc-800/40 font-light text-white hover:bg-zinc-700/50"
			>
				<Mail className="mr-2 size-5" />
				devrabbani9@gmail.com
			</Link>

			<a
				href="/cal"
				aria-label="Book a Call"
				className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 cursor-pointer border border-input shadow-xs hover:text-accent-foreground h-9 px-4 py-2 has-[>svg]:px-3 w-full bg-zinc-800/40 font-light text-white hover:bg-zinc-700/50"
			>
				<Calendar className="mr-2 size-5" />
				Book a Call
			</a>
		</div>
	);
};

export default Email;
