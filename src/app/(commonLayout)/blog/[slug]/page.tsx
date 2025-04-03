import SingleBLog from '@/components/pages/SingleBlog';

const page = async ({params}: {params: Promise<{slug: string}>}) => {
	const resolvedParams = await params;
	return <SingleBLog slug={resolvedParams.slug} />;
};

export default page;
