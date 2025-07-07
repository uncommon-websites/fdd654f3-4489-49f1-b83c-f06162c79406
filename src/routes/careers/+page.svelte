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
			title: "Make 'recover in minutes' the new normal",
			description:
				"Design, build, and scale the backbone that cuts ransomware downtime from weeks to minutes. Work on blockchain-verified backup primitives and high-availability node networks with real-time healing."
		},
		{
			title: "Work on what actually matters",
			description:
				"Level the playing field with AI-powered attackers as an engineer, not just a bystander. Build data protection architectures for unplanned chaos, not calm sunny days."
		},
		{
			title: "Everything we build is tested by failure",
			description:
				"We prototype in real-world failover scenarios. Our baseline question isn't 'have we shipped it,' but 'did it hold under actual compromise?' If you find that both daunting and exhilarating, join us."
		}
	];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Blockchain Recovery Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Cryptographic Systems Developer",
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
			title: "Infrastructure Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "MSP Relations Manager",
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
			title: "Cybersecurity Community Manager",
			department: "Growth",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Enterprise Marketing Lead",
			department: "Growth",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
		{
			name: "Alex Rivera",
			position: "Blockchain Recovery Engineer",
			company: "Engineering Team",
			quote:
				"Building infrastructure that guarantees recovery when traditional systems fail is incredibly rewarding. The technical challenges are complex and the mission is critical for business continuity.",
			image: "/generated/image-an-enterprise-security-professional-anal.webp"
		},
		{
			name: "Jordan Kim",
			position: "MSP Relations Manager",
			company: "Product Team",
			quote:
				"Working at the intersection of blockchain and enterprise recovery means I'm constantly learning. The impact of helping MSPs eliminate failed recovery attempts is transformative.",
			image: "/generated/image-an-msp-operations-director-in-a-secure-s.webp"
		},
		{
			name: "Maya Patel",
			position: "Cybersecurity Community Manager",
			company: "Growth Team",
			quote:
				"Being part of a team that's genuinely committed to guaranteed recovery and data protection is inspiring. The community we're building around immutable verification is passionate and engaged.",
			image: "/generated/image-a-confident-it-security-leader-standing-.webp"
		}
	];

	const processSteps = [
		{
			step: 1,
			title: "Apply",
			description:
				"Send your resume or GitHub link with a short note about which role interests you to careers@respawn.network."
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
			title: "Zero tolerance for failure",
			description:
				"We're building infrastructure that businesses depend on when everything else breaks. Every decision is made with the understanding that failure isn't an option."
		},
		{
			title: "Bias for deep thinking",
			description:
				"We speak clearly, especially when things are complicated. Documentation-first, egoless iteration, quality over clever tricks."
		},
		{
			title: "Tested by reality",
			description:
				"We prototype in real-world failover scenarios. Our baseline question isn't 'have we shipped it,' but 'did it hold under actual compromise?'"
		}
	];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Build the system the internet leans on"
	subtitle="Respawn is building the world's first blockchain-verified cyber recovery network to eliminate the 50% failure rate of traditional backups. This isn't another SaaS tool. It's business continuity infrastructure that businesses depend on when everything else breaks."
	imageSrc="/generated/image-a-technical-team-building-infrastructure.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader
		title="Why join us?"
		subtitle="Today, ransomware is faster, cheaper, and more automated thanks to AI. Most organizations play defense with outdated assumptions and optimistic restore buttons that blink red when needed most. We're flipping disaster recovery on its head—replacing hope with auditability."
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
