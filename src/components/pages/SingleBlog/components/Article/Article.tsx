import {IBlogData} from '@/types/blogs.interface';

const Article = ({data}: {data: IBlogData}) => {
	return <>{data?.content}</>;
};

export default Article;
