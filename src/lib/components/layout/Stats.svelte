<script lang="ts">
	// Types
	// import Clock from "~icons/lucide/clock";
	// import Laptop from "~icons/lucide/laptop";
	// import Building from "~icons/lucide/building";

	type StatItem = {
		value: string;
		description: string;
		icon: string;
	};

	// Props
	const {
		stats = [
			{
				value: "3 mins",
				description: "to set up your network",
				icon: "⏰"
			},
			{
				value: "2.5m",
				description: "devices connected",
				icon: "💻"
			},
			{
				value: "10K+",
				description: "companies running Tailscale",
				icon: "🏢"
			}
		],
		class: classes = ""
	}: { stats?: StatItem[]; class?: string } = $props();
</script>

<section class="w-full py-16 md:py-24 {classes}">
	<div class="container mx-auto px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
			{#each stats as stat}
				<div class="flex flex-col items-center text-center md:items-center">
					<span class="text-primary-700 mb-4 h-8 w-8 opacity-80 text-2xl">{stat.icon}</span>
					<span class="text-title1 mb-2 text-gray-900 dark:text-gray-50">{stat.value}</span>
					<span class="text-body text-gray-600 dark:text-gray-300">{stat.description}</span>
				</div>
			{/each}
		</div>
	</div>
</section>
