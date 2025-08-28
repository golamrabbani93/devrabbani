import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import {IKeyFeatures} from '@/types/projects.interface';

const Features = ({features}: {features: IKeyFeatures[]}) => {
	return (
		<div>
			<div className="divide-y divide-fd-border overflow-hidden rounded-lg border bg-[#191919]"></div>
			<h2
				className="flex scroll-m-28 flex-row items-center gap-2 text-base mt-12 mb-6 font-bold"
				id="-KeyFeatures"
			>
				<a data-card="" href="#-KeyFeatures" className="block text-2xl">
					🌟 Key Features
				</a>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
					aria-label="Link to section"
				>
					<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
					<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
				</svg>
			</h2>

			<div className=" overflow-hidden rounded-lg border bg-[#191919] ">
				<Accordion type="single" collapsible aria-checked className="w-full">
					{features?.map((feature, ind) => (
						<AccordionItem value={`feature-${ind}`} key={ind}>
							<AccordionTrigger className="text-base hover:translate-x-2 transition-transform duration-200">
								{feature?.featureTitle}
							</AccordionTrigger>
							<AccordionContent className="flex flex-col gap-4 text-balance ml-5 leading-5 ">
								{feature?.description}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default Features;
