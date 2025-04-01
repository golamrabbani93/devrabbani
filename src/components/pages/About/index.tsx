import Contact from '@/components/Contact/Contact';
import Experiences from './Experiences/Experiences';
import ME from './ME/ME';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';

const index = () => {
	return (
		<>
			<BreadCrumb />
			<div className="relative mx-auto max-w-6xl px-4 pt-28 pb-12 md:pt-36 md:pb-20">
				<ME />
				<Experiences />
			</div>
			<Contact />
		</>
	);
};

export default index;
