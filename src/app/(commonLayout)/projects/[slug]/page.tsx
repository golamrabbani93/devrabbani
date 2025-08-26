import SingleProjects from '@/components/pages/SingleProjects/SingleProjects';
import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Single Project || DevRabbani',
	description: 'Read the latest blogs on web development, programming, and technology.',
};

const page = async ({params}: {params: Promise<{slug: string}>}) => {
	const {slug} = await params;
	console.log('🚀🚀 ~ page ~ slug:', slug);
	return (
		<>
			<SingleProjects />
		</>
	);
};

export default page;
