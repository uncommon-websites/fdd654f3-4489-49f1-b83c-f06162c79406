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
			title: "Shape the decentralized internet",
			description: "Work on foundational Web3 infrastructure that will power the next generation of censorship-resistant, privacy-preserving applications."
		},
		{
			title: "Build with purpose",
			description: "Create products that defend privacy and open access in the age of centralized control, making a real impact on digital sovereignty."
		},
		{
			title: "Grow in emerging tech",
			description: "Master cutting-edge blockchain technology and Cosmos SDK while building your career in the fastest-growing sector of technology."
		}
	];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Blockchain Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Cosmos SDK Developer",
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
			title: "DevOps Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Developer Relations",
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
			title: "Community Manager",
			department: "Growth",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Web3 Marketing Lead",
			department: "Growth",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
		{
			name: "Alex Rivera",
			position: "Blockchain Engineer",
			company: "Engineering Team",
			quote:
				"Building infrastructure that will power the decentralized internet is incredibly rewarding. The technical challenges are complex and the mission is meaningful.",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		},
		{
			name: "Jordan Kim",
			position: "Developer Relations",
			company: "Product Team",
			quote:
				"Working at the intersection of Web3 and developer experience means I'm constantly learning. The impact of helping developers build censorship-resistant apps is huge.",
			image:
				"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		},
		{
			name: "Maya Patel",
			position: "Community Manager",
			company: "Growth Team",
			quote:
				"Being part of a team that's genuinely committed to user privacy and decentralization is inspiring. The community we're building around data sovereignty is passionate and engaged.",
			image:
				"https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		}
	];

	const processSteps = [
		{
			step: 1,
			title: "Apply",
			description:
				"Send us your resume or portfolio to patrick@jackallabs.io with a brief note about your interest in decentralized technologies."
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
			description: "Product is ideated, built, and shipped by engineers with real voice in direction and architecture decisions."
		},
		{
			title: "Privacy by design",
			description: "We don't just build for user control and privacy—we organize around these principles as a team."
		},
		{
			title: "Decentralized thinking",
			description: "We embrace distributed systems, autonomous work, and resistance to single points of failure in everything we do."
		}
	];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Build the future of decentralized storage"
	subtitle="Join our mission to create censorship-resistant, privacy-preserving cloud storage solutions. Work with cutting-edge Web3 technology alongside brilliant minds in a collaborative, remote-first environment."
	imageSrc="/generated/image-a-diverse-team-of-developers-collaborati.webp"
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
