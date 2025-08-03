<script lang="ts">
	// Props
	const {
		quote = "FlashValue replaced 80% of my analyst's work. Game changer.",
		name = "Managing Partner",
		company = "Forensic Firm",
		imageSrc = "/generated/image-happy-cpa-celebrating-successful-work-co.webp",
		...rest
	}: {
		quote?: string;
		name?: string;
		company?: string;
		imageSrc?: string;
	} = $props();
</script>

<section class="section-py section-px" {...rest}>
	<div class="container mx-auto">
		<div class="mx-auto max-w-4xl text-center">
			<blockquote class="text-title1 mb-8 text-balance">
				"{quote}"
			</blockquote>
			
			<div class="flex items-center justify-center gap-4">
				<img
					src={imageSrc}
					alt="{name} testimonial"
					class="h-12 w-12 rounded-full object-cover"
				/>
				<div class="text-left">
					<p class="text-body font-medium">{name}</p>
					<p class="text-caption text-muted-foreground">{company}</p>
				</div>
			</div>
		</div>
	</div>
</section>