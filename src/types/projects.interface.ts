export interface IProjects {
	id: string;
	name: string;
	image: string;
	description: string;
	live_link: string;
	admin_info: AdminInfo;
	highLightTech: Technology[];
	github_link: GithubLink[];
	technology: Technology[];
	feature: string;
	site_images: string[];
	filter: string;
	item: string;
}

export interface AdminInfo {
	email: string;
	pass: string;
}

export interface GithubLink {
	client_side: string;
	server_side?: string;
}

export interface Technology {
	name: string;
	image: string;
}
