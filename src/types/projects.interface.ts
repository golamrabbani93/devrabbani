export interface IProjects {
	id: string;
	name: string;
	fullPhoto: string;
	images: string[];
	liveLink: string;
	description?: string;
	githubClientLink: string;
	githubServerLink?: string;
	technologies?: Technology[];
	features: string[];
	filter: string;
	isDeleted: boolean;
	adminEmail?: string;
	adminPassword?: string;
	highLightTech?: {name: string; image: string}[];
	status: string;
	createdAt?: string;
	updatedAt?: string;
	__v?: number;
}

export interface Technology {
	_id?: string;
	name: string;
	image: string;
}

interface ITech {
	id: string;
	name: string;
	image: string;
}

interface IHighLightTech {
	name: string;
	image: string;
}

interface IChallengePoint {
	pointTitle: string;
	description: string;
}

export interface IChallenges {
	title: string;
	points: IChallengePoint[];
}

interface IDescriptions {
	head: string;
	founders: string;
	overview: string;
	outcome: string;
}
export interface IKeyFeatures {
	featureTitle: string;
	description: string;
}
export interface IProject {
	id: string;
	_id: string;
	name: string;
	fullPhoto: string;
	images: string[];
	liveLink: string;
	githubClientLink: string;
	highLightTech: IHighLightTech[];
	description: string;
	descriptions: IDescriptions;
	Challenges: IChallenges;
	keyFeatures: IKeyFeatures[];
	color: string;
	technologies: ITech[];
}
