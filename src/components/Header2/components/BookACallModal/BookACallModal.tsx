import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';

import Social from './Social/Social';
import Email from './Email/Email';
import Form from './Form/Form';

const BookACallModal = () => {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<li className="relative">
					<button className="items-center justify-center gap-2 relative inline-block h-full cursor-pointer rounded-full bg-white/10 px-4 py-1.5 text-sm font-light text-white/70 transition-all duration-300 hover:bg-white/15 hover:text-white/90">
						Book a Call
						<div className="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-white/40 opacity-30 blur-sm"></div>
					</button>
				</li>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="hidden">
					<DrawerTitle>Move Goal</DrawerTitle>
					<DrawerDescription>Set your daily activity goal.</DrawerDescription>
				</DrawerHeader>
				{/* Social Link */}
				<Social />
				{/* email and book a call */}
				<Email />
				<div className="text-muted-foreground mx-auto my-4 w-full text-center text-xs">
					Or send a message
				</div>
				<Form />
			</DrawerContent>
		</Drawer>
	);
};

export default BookACallModal;
