<script lang="ts">
	// Components
	import SectionHeader from "./SectionHeader.svelte";

	// Props
	const {
		title = "See FlashValue in action",
		subtitle = "Professional reports generated in minutes",
		imageSrc = "/generated/image-a-professional-business-valuation-report.webp",
		features = [
			"Normalize EBITDA",
			"AI-generated narrative", 
			"Editable assumptions"
		],
		...rest
	}: {
		title?: string;
		subtitle?: string;
		imageSrc?: string;
		features?: string[];
	} = $props();
</script>

<section class="section-py section-px" {...rest}>
	<div class="container mx-auto">
		<SectionHeader {title} {subtitle} />
		
		<div class="mt-16 relative">
			<div class="relative mx-auto max-w-4xl">
				<img
					src={imageSrc}
					alt="FlashValue report builder interface"
					class="w-full rounded-lg border border-gray-200 dark:border-gray-700"
				/>
				
				<!-- Feature labels positioned over the image -->
				<div class="absolute top-4 left-4 space-y-2">
					{#each features as feature, index}
						<div class="flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 text-sm font-medium text-gray-900 backdrop-blur-sm border border-gray-200">
							<div class="h-2 w-2 rounded-full bg-primary-600"></div>
							{feature}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>