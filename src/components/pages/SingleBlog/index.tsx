import {blogData} from '@/data/blogData';
import Article from './components/Article/Article';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';
import Header from './components/Header/Header';
import {IBlogData} from '@/types/blogs.interface';

const index = ({slug}: {slug: string}) => {
	const data = blogData.find((post) => post?.href?.split('/').slice(2)[0] === slug);
	return (
		<>
			<BreadCrumb />
			<div className="mx-auto max-w-6xl px-4 py-8 ">
				<Header data={data as IBlogData} />
				<div className="mt-6 flex flex-col gap-8 lg:flex-row">
					<Article data={data as IBlogData} />
				</div>
			</div>
		</>
	);
};

export default index;
