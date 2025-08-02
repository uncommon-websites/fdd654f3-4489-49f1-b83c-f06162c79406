<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons - using inline SVGs instead of icon imports
	// import IconBriefcase from "~icons/lucide/briefcase";
	// import IconUsers from "~icons/lucide/users";
	// import IconHeart from "~icons/lucide/heart";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
		{
			title: "Make 'reports in minutes' the new normal",
			description:
				"Design, build, and scale the AI engine that cuts valuation turnaround from weeks to minutes. Work on financial data normalization, comps-based analysis, and natural language generation that meets audit standards."
		},
		{
			title: "Work on what actually matters",
			description:
				"Build tools that amplify human expertise instead of replacing it. Create AI systems that help professionals scale their practice while maintaining the accuracy their reputation depends on."
		},
		{
			title: "Everything we build is tested by professionals",
			description:
				"We prototype with real CPAs and forensic accountants. Our baseline question isn't 'does it work,' but 'would you stake your professional reputation on it?' If you find that both challenging and rewarding, join us."
		}
	];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "AI/ML Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Financial Data Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Accounting Relations Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Technical Writer",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Growth
		{
			title: "Accounting Community Manager",
			department: "Growth",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Professional Services Marketing Lead",
			department: "Growth",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
		{
			name: "Alex Rivera",
			position: "AI/ML Engineer",
			company: "Engineering Team",
			quote:
				"Building AI that amplifies professional expertise instead of replacing it is incredibly rewarding. The technical challenges are complex and the mission is critical for helping accountants scale their practice.",
			image: "/generated/image-a-confident-female-accountant-in-a-profe.webp"
		},
		{
			name: "Jordan Kim",
			position: "Accounting Relations Manager",
			company: "Product Team",
			quote:
				"Working at the intersection of AI and professional services means I'm constantly learning. The impact of helping CPAs eliminate manual bottlenecks while maintaining accuracy is transformative.",
			image: "/generated/image-a-male-cpa-working-with-financial-spread.webp"
		},
		{
			name: "Maya Patel",
			position: "Accounting Community Manager",
			company: "Growth Team",
			quote:
				"Being part of a team that's genuinely committed to professional amplification is inspiring. The community we're building around AI-powered valuation is passionate and engaged.",
			image: "/generated/image-a-cpa-reviewing-business-valuation-repor.webp"
		}
	];

	const processSteps = [
		{
			step: 1,
			title: "Apply",
			description:
				"Send your resume or GitHub link with a short note about which role interests you to careers@flashvalue.com."
		},
		{
			step: 2,
			title: "Intro call",
			description:
				"We'll hop on a quick call to understand what you're looking for and share more about the role and team."
		},
		{
			step: 3,
			title: "Technical assessment",
			description:
				"Depending on the role, you may complete a short take-home project or discuss code you've already written with an engineer."
		},
		{
			step: 4,
			title: "Final conversation",
			description:
				"Connect directly with the core team and explore alignment on impact, projects, and ways you can grow with us."
		}
	];

	const values = [
		{
			title: "Zero tolerance for inaccuracy",
			description:
				"We're building tools that professionals stake their reputation on. Every decision is made with the understanding that accuracy isn't negotiable."
		},
		{
			title: "Bias for deep thinking",
			description:
				"We speak clearly, especially when things are complicated. Documentation-first, egoless iteration, quality over clever tricks."
		},
		{
			title: "Tested by professionals",
			description:
				"We prototype with real CPAs and forensic accountants. Our baseline question isn't 'have we shipped it,' but 'would you stake your professional reputation on it?'"
		}
	];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Build the system accountants depend on"
	subtitle="Building AI-powered valuation infrastructure that never compromises on accuracy."
	imageSrc="/generated/image-a-professional-accounting-team-collabora.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader
		title="Why join us?"
		subtitle="Replace hope with guaranteed recovery infrastructure."
	/>

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>
		<p class="text-body text-emphasis-low mb-16">
			We move fast—most candidates hear back and complete the process within 2 to 3 weeks.
		</p>

		<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
