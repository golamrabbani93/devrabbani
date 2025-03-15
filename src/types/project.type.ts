type TechTool = {
	name: string;
	icon: string;
};

type GithubLinks = {
	client_side: string;
	server_side: string;
};

type AdminInfo = {
	email: string;
	pass: string;
};

export type IProject = {
	id: string;
	name: string;
	image: string;
	live_link: string;
	admin_info: AdminInfo;
	github_link: GithubLinks[];
	feature: string;
	site_images: string[];
	highLightTools: TechTool[];
	allTools: TechTool[];
	color: string;
	background: string;
	shadow: string;
};
