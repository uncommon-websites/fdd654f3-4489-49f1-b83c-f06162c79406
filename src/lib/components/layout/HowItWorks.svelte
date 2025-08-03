<script lang="ts">
	// Components
	import SectionHeader from "./SectionHeader.svelte";
	
	// Icons
	import IconUpload from "~icons/lucide/upload";
	import IconMessageSquare from "~icons/lucide/message-square";
	import IconDownload from "~icons/lucide/download";

	// Props
	const {
		title = "How it works",
		subtitle = "Three simple steps to audit-ready reports",
		steps = [
			{
				icon: IconUpload,
				title: "Upload financials",
				description: "CSV, Excel, or QuickBooks"
			},
			{
				icon: IconMessageSquare,
				title: "Answer a few context questions",
				description: "Industry, owner adjustments"
			},
			{
				icon: IconDownload,
				title: "Download your audit-ready report",
				description: "PDF or Word"
			}
		],
		...rest
	}: {
		title?: string;
		subtitle?: string;
		steps?: Array<{
			icon: any;
			title: string;
			description: string;
		}>;
	} = $props();
</script>

<section class="section-py section-px bg-gray-50 dark:bg-gray-900" {...rest}>
	<div class="container mx-auto">
		<SectionHeader {title} {subtitle} />
		
		<div class="mt-16 grid gap-8 md:grid-cols-3">
			{#each steps as step, index}
				<div class="text-center">
					<div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
						<svelte:component this={step.icon} class="h-8 w-8" />
					</div>
					<div class="mb-2 flex items-center justify-center gap-2">
						<span class="text-sm font-medium text-primary-600">{index + 1}</span>
						<h3 class="text-title3">{step.title}</h3>
					</div>
					<p class="text-body text-muted-foreground">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>