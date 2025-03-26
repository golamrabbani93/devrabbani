export interface IProjects {
	id: string;
	name: string;
	fullPhoto: string;
	images: string[];
	liveLink: string;
	description: string;
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
