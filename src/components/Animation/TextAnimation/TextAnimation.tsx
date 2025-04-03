import {TextAnimate} from '@/components/magicui/text-animate';

const TextAnimation = ({children}: {children: string}) => {
	return (
		<TextAnimate
			className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm"
			animation="slideLeft"
			by="character"
			variants={{
				hidden: {opacity: 0, y: 0},
				show: {opacity: 1, y: 0, transition: {duration: 0.5}},
				exit: {opacity: 0, y: 0},
			}}
			duration={0.5}
		>
			{children}
		</TextAnimate>
	);
};

export default TextAnimation;
