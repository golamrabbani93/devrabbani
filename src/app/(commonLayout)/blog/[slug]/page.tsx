import SingleBLog from '@/components/pages/SingleBlog';

const page = ({params}: {params: {slug: string}}) => {
	const {slug} = params;

	return <SingleBLog slug={slug} />;
};

export default page;
