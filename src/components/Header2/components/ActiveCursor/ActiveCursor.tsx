import {motion} from 'framer-motion';

const ActiveCursor = () => {
	return (
		<motion.div
			layoutId="cursor"
			className="bg-primary/5 absolute inset-0 -z-10 w-full rounded-full "
			transition={{type: 'tween', duration: 0.7}}
			style={{borderRadius: '9999px'}}
		>
			<div className="bg-primary absolute -top-2.5 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full">
				<div className="bg-primary/20 absolute -top-2 -left-2 h-6 w-12 rounded-full blur-md"></div>
				<div className="bg-primary/20 absolute -top-1 h-6 w-8 rounded-full blur-md"></div>
			</div>
		</motion.div>
	);
};

export default ActiveCursor;
