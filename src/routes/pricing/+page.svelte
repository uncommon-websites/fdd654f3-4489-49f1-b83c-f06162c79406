<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
	testimonials={[
		{
			name: "Zara Ashenafi",
			position: "Blockchain Developer",
			company: "DeFi Collective",
			quote:
				"Jackal reduced our storage costs by 60% while giving us complete control over our data. The ROI was immediate and the integration took just days, not weeks.",
			image:
				"/generated/image-a-confident-ethiopian-woman-in-a-busines.webp"
		},
		{
			name: "Kyung-ho Park",
			position: "DevOps Engineer",
			company: "Web3 Ventures",
			quote:
				"The ease of use blew me away. Jackal's APIs are intuitive and the documentation is stellar. We migrated our entire infrastructure with zero downtime.",
			image:
				"/generated/image-a-confident-korean-man-in-a-corporate-en.webp"
		},
		{
			name: "Esperanza Morales",
			position: "Startup Founder",
			company: "ChainLink Analytics",
			quote:
				"Jackal's provable storage gives our users confidence that their data is truly secure. The transparency and censorship resistance are game-changers for our platform.",
			image:
				"/generated/image-a-confident-hispanic-woman-in-an-office-.webp"
		},
		{
			name: "Amara Khaled",
			position: "Security Architect",
			company: "Quantum Safe",
			quote:
				"The value proposition is unmatched. Jackal delivers enterprise-grade security at a fraction of traditional cloud costs, with none of the vendor lock-in risks.",
			image:
				"/generated/image-a-confident-arab-man-in-a-business-envir.webp"
		}
	]}
/>

<CallToAction />
