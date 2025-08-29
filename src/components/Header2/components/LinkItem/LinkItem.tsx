import Link from 'next/link';
import {usePathname} from 'next/navigation';
import ActiveCursor from '../ActiveCursor/ActiveCursor';

interface ILinkItemProps {
	href: string;
	children: React.ReactNode;
}
const LinkItem = ({href, children}: ILinkItemProps) => {
	const pathname = usePathname();
	const subPathname = pathname.split('/')[2];

	return (
		<li className="relative">
			<Link
				href={href}
				className="focus:text-accent-foreground data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground gap-1 rounded-full p-2 focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4 inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
			>
				{children}
			</Link>
			{(pathname === href || (subPathname && pathname === `${href}/${subPathname}`)) && (
				<ActiveCursor />
			)}
		</li>
	);
};

export default LinkItem;
