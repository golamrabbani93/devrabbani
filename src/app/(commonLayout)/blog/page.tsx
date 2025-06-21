import Blog from '@/components/pages/Blog';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Blogs || DevRabbani',
	description: 'Read the latest blogs on web development, programming, and technology.',
};
const page = () => {
	return (
		<>
			<Blog />
		</>
	);
};

export default page;
