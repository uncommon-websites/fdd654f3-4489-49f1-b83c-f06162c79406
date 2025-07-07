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
			name: "Marcus Chen",
			position: "CISO",
			company: "TechFlow Industries",
			quote:
				"After our traditional backup failed during a ransomware attack, Respawn's guaranteed recovery saved us from a $2M loss. The parallel rehydration got us back online in minutes, not days.",
			image: "/generated/image-a-confident-it-security-manager-standing.webp"
		},
		{
			name: "Sarah Rodriguez",
			position: "MSP Operations Director",
			company: "SecureNet Solutions",
			quote:
				"Respawn's immutable verification gives our clients confidence that their recovery will work. We've eliminated failed recovery attempts and the reputation damage that comes with them.",
			image: "/generated/image-an-msp-operations-director-in-a-secure-s.webp"
		},
		{
			name: "David Kim",
			position: "IT Director",
			company: "MidMarket Manufacturing",
			quote:
				"The blockchain-powered verification means we can prove our data integrity to auditors instantly. Respawn turned our biggest compliance headache into our strongest security asset.",
			image: "/generated/image-an-it-director-reviewing-systems-in-a-se.webp"
		},
		{
			name: "Elena Vasquez",
			position: "Security Architect",
			company: "Financial Services Corp",
			quote:
				"The value proposition is unmatched. Respawn delivers enterprise-grade recovery at a fraction of traditional disaster recovery costs, with mathematical proof of data integrity.",
			image: "/generated/image-an-enterprise-security-professional-anal.webp"
		}
	]}
/>

<CallToAction />
