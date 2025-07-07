<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons - temporarily commented out due to build issues
	// import IconBriefcase from "~icons/lucide/briefcase";
	// import IconUsers from "~icons/lucide/users";
	// import IconHeart from "~icons/lucide/heart";
	// import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
		{
			title: "Shape the future of recovery",
			description: "Work on foundational blockchain infrastructure that will power the next generation of guaranteed recovery systems, eliminating the 50% industry failure rate."
		},
		{
			title: "Build with purpose",
			description: "Create products that protect organizations from AI-powered attacks and ransomware, making a real impact on business continuity and data security."
		},
		{
			title: "Grow in emerging tech",
			description: "Master cutting-edge blockchain technology and cryptographic verification while building your career in the fastest-growing cybersecurity sector."
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
			image: "/generated/image-a-professional-woman-leading-a-cybersecu.webp"
		},
		{
			name: "Maya Patel",
			position: "Cybersecurity Community Manager",
			company: "Growth Team",
			quote:
				"Being part of a team that's genuinely committed to guaranteed recovery and data protection is inspiring. The community we're building around immutable verification is passionate and engaged.",
			image: "/generated/image-a-happy-it-manager-standing-in-a-gritty-.webp"
		}
	];

	const processSteps = [
		{
			step: 1,
			title: "Apply",
			description:
				"Send us your resume or portfolio to patrick@respawn.com with a brief note about your interest in blockchain recovery technologies."
		},
		{
			step: 2,
			title: "Technical review",
			description: "Complete a short async project or intro call, followed by a technical or functional interview based on your role."
		},
		{
			step: 3,
			title: "Team fit",
			description: "Meet 1-2 members of the team to discuss collaboration style and ensure mutual alignment before making a final decision."
		}
	];

	const values = [
		{
			title: "Engineering excellence",
			description: "Product is ideated, built, and shipped by engineers with real voice in direction and architecture decisions, ensuring guaranteed recovery works flawlessly."
		},
		{
			title: "Security by design",
			description: "We don't just build for data protection—we organize around zero trust principles and immutable verification as a team."
		},
		{
			title: "Recovery-first thinking",
			description: "We embrace distributed systems, autonomous work, and resistance to single points of failure in everything we do, ensuring recovery always works."
		}
	];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Build the future of guaranteed recovery"
	subtitle="Join our mission to eliminate failed recovery attempts and protect organizations from AI-powered attacks. Work with cutting-edge blockchain technology alongside brilliant minds in a collaborative, remote-first environment."
	imageSrc="/generated/image-a-group-of-diverse-cybersecurity-profess.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Build your career while making an impact" />

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

		<div class="grid gap-12 md:grid-cols-3">
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
