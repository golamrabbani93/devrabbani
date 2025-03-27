'use client';
import {motion} from 'framer-motion';
import {useScroll} from 'framer-motion';
import {useEffect, useState} from 'react';
const SideBarAnimation = () => {
	const [scrollHeight, setScrollHeight] = useState(0);
	const {scrollY} = useScroll();

	useEffect(() => {
		return scrollY.onChange((latest) => {
			setScrollHeight(latest);
		});
	}, [scrollY]);
	return (
		<div
			className="absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
			style={{height: '1488.47px'}}
		>
			<motion.div
				className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-pink-500 from-[0%] via-blue-500 via-[10%] to-transparent"
				animate={{
					height: scrollHeight - 400,
					opacity: scrollHeight === 400 ? 0 : 1,
				}}
				transition={{type: 'tween', duration: 0.1}}
			></motion.div>
		</div>
	);
};

export default SideBarAnimation;
