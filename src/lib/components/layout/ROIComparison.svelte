<script lang="ts">
	// Components
	import SectionHeader from "./SectionHeader.svelte";

	// Props
	const {
		title = "Save 20 hours. Keep your fees.",
		subtitle = "See the difference FlashValue makes",
		comparisons = [
			{ aspect: "Time to complete", oldWay: "3–4 days of work", flashValue: "Done in 30 minutes" },
			{ aspect: "Technology", oldWay: "Excel models", flashValue: "AI-powered valuation engine" },
			{ aspect: "Assumptions", oldWay: "Manual assumptions", flashValue: "Smart, editable suggestions" },
			{ aspect: "Reports", oldWay: "Word writeups", flashValue: "GPT-generated reports" }
		],
		...rest
	}: {
		title?: string;
		subtitle?: string;
		comparisons?: Array<{
			aspect: string;
			oldWay: string;
			flashValue: string;
		}>;
	} = $props();
</script>

<section class="section-py section-px bg-gray-50 dark:bg-gray-900" {...rest}>
	<div class="container mx-auto">
		<SectionHeader {title} {subtitle} />
		
		<div class="mt-16 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
			<div class="bg-white dark:bg-gray-800">
				<!-- Table Header -->
				<div class="grid grid-cols-3 border-b border-gray-200 dark:border-gray-700">
					<div class="px-6 py-4"></div>
					<div class="border-l border-gray-200 px-6 py-4 text-center dark:border-gray-700">
						<h3 class="text-title3 text-muted-foreground">Old way</h3>
					</div>
					<div class="border-l border-gray-200 px-6 py-4 text-center dark:border-gray-700">
						<h3 class="text-title3 text-primary-600">FlashValue</h3>
					</div>
				</div>
				
				<!-- Table Rows -->
				{#each comparisons as comparison, index}
					<div class="grid grid-cols-3 {index < comparisons.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}">
						<div class="px-6 py-4">
							<p class="text-body font-medium">{comparison.aspect}</p>
						</div>
						<div class="border-l border-gray-200 px-6 py-4 dark:border-gray-700">
							<p class="text-body text-muted-foreground">{comparison.oldWay}</p>
						</div>
						<div class="border-l border-gray-200 px-6 py-4 dark:border-gray-700">
							<p class="text-body font-medium text-primary-600">{comparison.flashValue}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>