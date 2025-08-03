<script lang="ts">
	// Components
	import SectionHeader from "./SectionHeader.svelte";

	// Props
	const {
		title = "Why business valuations suck right now",
		painPoints = [
			{ emoji: "🐢", text: "Slow, manual, and error-prone" },
			{ emoji: "🧮", text: "Built in fragile Excel templates" },
			{ emoji: "📄", text: "Writeups take hours" }
		],
		followUpText = "FlashValue lets you deliver valuation reports in minutes—without sacrificing accuracy.",
		...rest
	}: {
		title?: string;
		painPoints?: Array<{ emoji: string; text: string }>;
		followUpText?: string;
	} = $props();
</script>

<section class="section-py section-px" {...rest}>
	<div class="container mx-auto">
		<SectionHeader {title} />
		
		<div class="mt-12 grid gap-8 md:grid-cols-3">
			{#each painPoints as point}
				<div class="flex items-start gap-4">
					<span class="text-4xl" role="img" aria-hidden="true">{point.emoji}</span>
					<p class="text-headline text-muted-foreground">{point.text}</p>
				</div>
			{/each}
		</div>
		
		<div class="mt-12 text-center">
			<p class="text-title3 max-w-2xl mx-auto text-balance">{followUpText}</p>
		</div>
	</div>
</section>