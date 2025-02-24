import Banner from './components/Banner/Banner';
import Collaboration from './components/Collaboration/Collaboration';

const index = () => {
	return (
		<>
			<Banner />
			<div className="w-full max-w-7xl px-5 md:px-4 mx-auto">
				<Collaboration />
			</div>
		</>
	);
};

export default index;
