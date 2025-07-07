// Types
import { CONFIG } from "$lib/content";
import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async () => {
	return {
		meta: {
			title: CONFIG.companyName,
			description: CONFIG.description,
			image: CONFIG.image,
			url: CONFIG.url,
			companyName: CONFIG.companyName
		}
	};
};
