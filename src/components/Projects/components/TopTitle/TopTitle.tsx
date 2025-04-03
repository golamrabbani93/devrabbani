import TextAnimation from '@/components/Animation/TextAnimation/TextAnimation';
import {motion} from 'framer-motion';
const TopTitle = () => {
	return (
		<motion.h2
			className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-center"
			style={{
				textShadow: 'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px',
			}}
			initial={{opacity: 0, y: 20}}
			whileInView={{opacity: 1, y: 0}}
			exit={{opacity: 0, y: 20}}
			transition={{duration: 0.5}}
		>
			<TextAnimation text="FEATURED CASE STUDIES" />
			<span className="">
				<span className="">Curated</span>{' '}
				<motion.span
					initial={{scale: 0.8}}
					whileInView={{scale: 1}}
					exit={{scale: 0.9}}
					className="text-colorfull animate-gradient-x font-nyght tracking-wide"
				>
					work
				</motion.span>
			</span>
		</motion.h2>
	);
};

export default TopTitle;
