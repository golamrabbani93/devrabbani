import Article from './components/Article/Article';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';
import Header from './components/Header/Header';

const index = () => {
	return (
		<>
			<BreadCrumb />
			<div className="mx-auto max-w-6xl px-4 py-8 ">
				<Header />
				<div className="mt-6 flex flex-col gap-8 lg:flex-row">
					<Article />
				</div>
			</div>
		</>
	);
};

export default index;
