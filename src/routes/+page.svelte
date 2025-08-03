<script lang="ts">
	// Components
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";
	import PainPoints from "$lib/components/layout/PainPoints.svelte";
	import HowItWorks from "$lib/components/layout/HowItWorks.svelte";
	import ProductDemo from "$lib/components/layout/ProductDemo.svelte";
	import ROIComparison from "$lib/components/layout/ROIComparison.svelte";
	import SingleTestimonial from "$lib/components/layout/SingleTestimonial.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
</script>

<!-- 1. Hero Section -->
<CenteredTextOnlyHero
	title="Generate business valuations in minutes, not days."
	subtitle="AI-powered reports built for CPAs and forensic accountants. Upload financials—FlashValue handles the rest."
	trustIndicator="Used by top valuation professionals to cut report time by 90%."
	imageSrc="/generated/image-a-professional-accountant-working-confid.webp"
	callsToAction={[
		{
			href: "mailto:patrick@flashvalue.com",
			label: "Book a demo",
			variant: "primary"
		},
		{
			href: "#sample-report",
			label: "Try a sample report",
			variant: "secondary"
		}
	]}
/>

<!-- 2. Pain / Problem Section -->
<PainPoints />

<!-- 3. How It Works -->
<HowItWorks />

<!-- 4. Product Screenshot / Demo Preview -->
<ProductDemo />

<!-- 5. Value Proposition / ROI -->
<ROIComparison />

<!-- 6. Customer Quote -->
<SingleTestimonial />

<!-- 7. Call to Action -->
<CallToAction
	title="Ready to move faster?"
	subtitle="Join the professionals who've eliminated valuation bottlenecks"
	description="See how FlashValue transforms your practice while maintaining the accuracy and defensibility your reputation requires."
	imageSrc="/generated/image-happy-cpa-celebrating-successful-work-co.webp"
	callsToAction={[
		{
			href: "mailto:patrick@flashvalue.com",
			label: "🚀 Book a demo",
			variant: "primary"
		},
		{
			href: "#sample-report",
			label: "🧪 Try a sample report",
			variant: "secondary"
		}
	]}
/>

<!-- 8. Footer is handled by the layout -->
