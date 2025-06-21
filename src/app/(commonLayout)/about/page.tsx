import About from '@/components/pages/About';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'About || DevRabbani',
	description:
		'Learn more about DevRabbani, the mission, vision, and the team behind the web development tutorials and tech insights.',
};
const page = () => {
	return (
		<>
			<About />
		</>
	);
};

export default page;
