<script lang="ts">
	// Types
	import type { PageData } from "./$types";

	// Components
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Props
	const { data }: { data: PageData } = $props();

	// Transform testimonials data
	const transformedTestimonials = $derived(
		data.testimonials?.map(testimonial => ({
			name: testimonial.author,
			position: testimonial.role,
			company: "", // Not provided in data
			quote: testimonial.quote,
			image: testimonial.imageSrc
		})) || []
	);

	// Transform features data - remove icons for now to fix build
	const transformedFeatures = $derived(
		data.features?.items?.map(feature => ({
			title: feature.title,
			description: feature.description
			// icon: undefined // Remove icons temporarily to fix build
		})) || []
	);
</script>

{#if data.hero}
<Hero
	title={data.hero.title}
	subtitle={data.hero.subtitle}
	imageSrc={data.hero.imageSrc}
	callsToAction={data.hero.callsToAction}
/>
{/if}

{#if data.summary}
<Summary title={data.summary.title} text={data.summary.text} />
{/if}

{#if transformedTestimonials.length > 0}
<Testimonials testimonials={transformedTestimonials} />
{/if}

{#if data.features}
<Features
	title={data.features.title}
	subtitle={data.features.subtitle}
	features={transformedFeatures}
/>
{/if}

{#if data.cta}
	<CallToAction
		title={data.cta.title}
		subtitle={data.cta.subtitle}
		description={data.cta.description}
		callsToAction={data.cta.callsToAction}
	/>
{/if}