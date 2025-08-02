<script lang="ts">
	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import BlogCard, { type BlogPost } from "./BlogCard.svelte";

	// Simple SVG icons as components
	const SearchIcon = () => `<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`;
	const FilterIcon = () => `<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"></path></svg>`;

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";

	// Blog posts data
	const blogPosts: BlogPost[] = [
		{
			title: "Why manual valuation processes fail—and what to do about it",
			description: "Explore the root cause behind valuation bottlenecks and how AI-powered automation changes the equation. Learn why traditional Excel-based workflows limit practice growth.",
			date: "2024-01-15",
			readTime: "8 min read",
			category: "Efficiency",
			image: "/generated/image-a-professional-accountant-working-at-a-m.webp",
			url: "#"
		},
		{
			title: "AI is rewriting the rules of professional services",
			description: "Accounting professionals are using AI to work faster and smarter. Learn how to leverage automation while maintaining the accuracy your reputation depends on.",
			date: "2024-01-10",
			readTime: "6 min read",
			category: "AI Tools",
			image: "/generated/image-a-cpa-reviewing-business-valuation-repor.webp",
			url: "#"
		},
		{
			title: "The 4-minute valuation: inside FlashValue's AI engine",
			description: "How automated financial normalization and comps-based analysis lets professionals generate reports in minutes—not days. A technical deep dive into our methodology.",
			date: "2024-01-05",
			readTime: "12 min read",
			category: "Technical",
			image: "/generated/image-a-business-valuation-professional-presen.webp",
			url: "#"
		},
		{
			title: "Building a scalable valuation practice",
			description: "Most solo practitioners hit growth walls due to manual processes. Discover how to build systems that let you handle 10x more work without sacrificing quality.",
			date: "2023-12-28",
			readTime: "10 min read",
			category: "Strategy",
			image: "/generated/image-boutique-accounting-firm-partners-discus.webp",
			url: "#"
		},
		{
			title: "Forensic accounting in the AI age",
			description: "Traditional forensic methods are evolving. Learn how AI-powered tools help forensic accountants work faster while maintaining the rigor courts expect.",
			date: "2023-12-20",
			readTime: "7 min read",
			category: "Forensic",
			image: "/generated/image-a-forensic-accountant-analyzing-financia.webp",
			url: "#"
		},
		{
			title: "CPAs and the valuation automation revolution",
			description: "How certified public accountants are transforming their practices with AI-powered valuation tools. Real case studies and lessons learned from early adopters.",
			date: "2023-12-15",
			readTime: "9 min read",
			category: "CPA",
			image: "/generated/image-a-solo-cpa-working-efficiently-in-a-mode.webp",
			url: "#"
		}
	];

	// Categories for filtering
	const categories = ["All", "Recovery", "AI Threats", "Technical", "Strategy", "Security", "MSP"];

	// State
	let selectedCategory = $state("All");
	let searchQuery = $state("");

	// Filtered posts
	let filteredPosts = $derived.by(() => {
		let filtered = blogPosts;

		// Filter by category
		if (selectedCategory !== "All") {
			filtered = filtered.filter(post => post.category === selectedCategory);
		}

		// Filter by search query
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			filtered = filtered.filter(post => 
				post.title.toLowerCase().includes(query) ||
				post.description.toLowerCase().includes(query) ||
				post.category.toLowerCase().includes(query)
			);
		}

		return filtered;
	});

	// Featured post (latest)
	let featuredPost = $derived(blogPosts[0]);
</script>

<svelte:head>
	<title>Blog - Respawn</title>
	<meta name="description" content="Insights on cyber recovery, blockchain-verified backups, and zero-trust data protection from the Respawn team." />
</svelte:head>

<!-- Hero Section -->
<SecondaryHero
	title="Valuation insights that help you scale without sacrificing accuracy"
	subtitle="Manual valuation processes waste hours on formatting and templates—costing professionals time, money, and growth opportunities. FlashValue was built to change that."
	imageSrc="/generated/image-a-professional-accountant-working-at-a-m.webp"
/>

<!-- Featured Post Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader
		title="Latest insights on valuation efficiency"
		subtitle="Stay ahead of industry changes with expert analysis and practical guidance"
	/>

	{#if featuredPost}
		<div class="mt-16">
			<div class="grid gap-8 lg:grid-cols-2 lg:gap-12">
				<div class="order-2 lg:order-1">
					<div class="mb-4 flex items-center gap-3 text-caption text-muted-foreground">
						<span class="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
							Featured
						</span>
						<span>{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
						<span>•</span>
						<span>{featuredPost.readTime}</span>
					</div>
					
					<h2 class="text-title2 mb-4">
						<a href={featuredPost.url} class="hover:text-primary-600 transition-colors duration-200">
							{featuredPost.title}
						</a>
					</h2>
					
					<p class="text-body text-muted-foreground mb-6">
						{featuredPost.description}
					</p>
					
					<a
						href={featuredPost.url}
						class="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
					>
						Read full article
						<span class="ml-2 transition-transform duration-200 hover:translate-x-1">→</span>
					</a>
				</div>
				
				<div class="order-1 lg:order-2">
					<div class="aspect-video overflow-hidden rounded-lg">
						<img
							src={featuredPost.image}
							alt={featuredPost.title}
							class="h-full w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	{/if}
</section>

<!-- Search and Filter Section -->
<section class="bg-gray-50 dark:bg-gray-900">
	<div class={SECTION_BASE_CLASSES}>
		<div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
			<!-- Search -->
			<div class="relative flex-1 max-w-md">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
					{@html SearchIcon()}
				</div>
				<input
					type="text"
					placeholder="Search articles..."
					bind:value={searchQuery}
					class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
				/>
			</div>

			<!-- Category Filter -->
			<div class="flex items-center gap-2">
				<div class="text-gray-400">
					{@html FilterIcon()}
				</div>
				<div class="flex flex-wrap gap-2">
					{#each categories as category}
						<button
							onclick={() => selectedCategory = category}
							class={[
								"px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200",
								selectedCategory === category
									? "bg-primary-600 text-white"
									: "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
							]}
						>
							{category}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Blog Posts Grid -->
<section class={SECTION_BASE_CLASSES}>
	{#if filteredPosts.length > 0}
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredPosts as post}
				<BlogCard {post} />
			{/each}
		</div>
	{:else}
		<div class="text-center py-12">
			<p class="text-body text-muted-foreground mb-4">
				No articles found matching your criteria.
			</p>
			<button
				onclick={() => {
					selectedCategory = "All";
					searchQuery = "";
				}}
				class="text-primary-600 hover:text-primary-700 font-medium"
			>
				Clear filters
			</button>
		</div>
	{/if}
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900">
	<div class={SECTION_BASE_CLASSES}>
		<div class="text-center">
			<h2 class="text-title2 mb-4">Join the founding cohort</h2>
			<p class="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
				We're inviting 50 forward-thinking teams to shape the future of cyber recovery. No credit card, no contracts—just guaranteed resilience.
			</p>
			<a
				href="/founding-cohort"
				class="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
			>
				Apply now
				<span class="ml-2 transition-transform duration-200 hover:translate-x-1">→</span>
			</a>
		</div>
	</div>
</section>