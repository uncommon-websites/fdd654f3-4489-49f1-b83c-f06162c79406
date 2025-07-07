<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
		{
			title: "Push boundaries with cutting-edge technology",
			description: "Build with the Cosmos SDK, zero-knowledge proofs, and provable storage systems. Our tech stack supports some of the most advanced use cases in blockchain today.",
			icon: IconBriefcase
		},
		{
			title: "Join a mission with meaning",
			description: "We're not here to chase trends—we're here to protect digital rights. At Jackal, your work directly supports user privacy, data ownership, and decentralization.",
			icon: IconUsers
		},
		{
			title: "Work from anywhere, with trust",
			description: "We're a remote-first team that values autonomy, clear communication, and asynchronous workflows. Contribute on your schedule—what matters is what you deliver, not where you work.",
			icon: IconHeart
		}
	];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
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
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
		{
			name: "Michael Chen",
			position: "Senior Developer",
			company: "Engineering Team",
			quote:
				"Working here has given me the opportunity to tackle challenging problems while maintaining a healthy work-life balance. The team culture is supportive and collaborative.",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		},
		{
			name: "Priya Sharma",
			position: "Product Designer",
			company: "Design Team",
			quote:
				"The creative freedom and opportunity to influence product decisions makes this the best place I've ever worked. I'm constantly learning and growing.",
			image:
				"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		},
		{
			name: "Marcus Johnson",
			position: "Marketing Lead",
			company: "Marketing Team",
			quote:
				"I joined three years ago and have grown tremendously. The leadership truly invests in your development and the work environment is both challenging and supportive.",
			image:
				"https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		}
	];

	const processSteps = [
		{
			step: 1,
			title: "Apply",
			description:
				"Send your resume or GitHub link with a short note about which role interests you to patrick@jackallabs.io."
		},
		{
			step: 2,
			title: "Intro call",
			description: "We'll hop on a quick call to understand what you're looking for and share more about the role and team."
		},
		{
			step: 3,
			title: "Technical assessment",
			description: "Depending on the role, you may complete a short take-home project or discuss code you've already written with an engineer."
		},
		{
			step: 4,
			title: "Final conversation",
			description: "Connect directly with the core team and explore alignment on impact, projects, and ways you can grow with us."
		}
	];

	const values = [
		{
			icon: IconHeart,
			title: "Think long term",
			description: "We're building infrastructure for decades to come. Decisions are made with staying power in mind—not quick wins."
		},
		{
			icon: IconUsers,
			title: "Code with integrity",
			description: "We care about usefulness, transparency, and building products that solve real problems—not chasing hype."
		},
		{
			icon: IconGlobe,
			title: "Stay open by default",
			description: "We believe in transparent decision-making and open collaboration—with each other and with our community."
		}
	];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Join our team of innovators"
	subtitle="We're looking for passionate people to help us build the future of digital experiences. Discover your next opportunity with us."
	imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Make an impact on the decentralized future. Work on critical Web3 infrastructure that powers censorship-resistant, privacy-first cloud storage." />

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
		<p class="text-body text-emphasis-low mb-16">We move fast—most candidates hear back and complete the process within 2 to 3 weeks.</p>

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
