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
			name: "Jennifer Walsh",
			position: "CPA, Partner",
			company: "Walsh & Associates",
			quote:
				"FlashValue cut our valuation turnaround from two weeks to two days. The AI narratives are surprisingly sophisticated, and clients love the professional presentation. It's transformed our practice.",
			image: "/generated/image-a-professional-female-cpa-sits-at-her-de.webp"
		},
		{
			name: "Michael Rodriguez",
			position: "Forensic Accountant",
			company: "Rodriguez Valuation Services",
			quote:
				"I was skeptical about AI-generated reports, but FlashValue's methodology is rock-solid. The time savings are incredible, and I can focus on analysis instead of formatting spreadsheets.",
			image: "/generated/image-a-male-forensic-accountant-is-deeply-eng.webp"
		},
		{
			name: "Sarah Chen",
			position: "Managing Director",
			company: "Precision Valuations LLC",
			quote:
				"FlashValue handles the grunt work so we can take on more clients without hiring more staff. The white-label reports maintain our brand, and the quality is consistently excellent.",
			image: "/generated/image-a-professional-asian-woman-in-business-a.webp"
		}
	]}
/>

<!-- Sticky CTA Section -->
<section class="section-py section-px bg-muted">
	<div class="container mx-auto text-center">
		<h2 class="text-title2 text-foreground mb-4">Your next valuation report could be done in 10 minutes</h2>
		<Button href="/signup" variant="primary" size="lg">Start Free Trial</Button>
	</div>
</section>
