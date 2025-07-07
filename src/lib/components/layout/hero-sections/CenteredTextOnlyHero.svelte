<!--

@component CenteredTextOnlyHero

This component displays a centered text hero with call to action buttons.
Takes up the full viewport height and centers content vertically.
-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";

	// Constants
	import { cta } from "$lib/navigation";

	// Types
	type Props = {
		title: string;
		subtitle: string;
		imageSrc: string;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>; // A maximum of two calls to action, with the first one being primary and the second one being secondary
	};

	let {
		title,
		subtitle,
		callsToAction = [cta],
		imageSrc = "/sample.png",
		...rest
	}: Props = $props();
</script>

<div class="grid h-[calc(100vh-var(--nav-height))] grid-rows-[1fr_auto]" {...rest}>
	<div class="bg-background relative isolate flex items-center justify-center">
		<div
			style:background-image="url('{imageSrc}')"
			class="absolute top-0 right-4 bottom-4 left-4 -z-10 rounded-(--radius-xl) bg-cover bg-center brightness-75"
		></div>

		<!-- Blockchain-inspired security background -->
		<div class="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80">
			<!-- Network mesh pattern -->
			<div class="absolute inset-0 opacity-20">
				<svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
					<defs>
						<pattern id="blockchain-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
							<path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
						</pattern>
						<pattern id="security-nodes" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
							<circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.4"/>
							<circle cx="5" cy="5" r="0.5" fill="currentColor" opacity="0.2"/>
							<circle cx="15" cy="15" r="0.5" fill="currentColor" opacity="0.2"/>
						</pattern>
					</defs>
					<rect width="100" height="100" fill="url(#blockchain-grid)"/>
					<rect width="100" height="100" fill="url(#security-nodes)"/>
				</svg>
			</div>
			
			<!-- Distributed network connections -->
			<div class="absolute inset-0 opacity-15">
				<svg class="h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="none">
					<!-- Network connection lines -->
					<path d="M50,50 L150,80 L250,60 L350,90" stroke="currentColor" stroke-width="1" fill="none" opacity="0.6"/>
					<path d="M80,120 L180,100 L280,130 L380,110" stroke="currentColor" stroke-width="1" fill="none" opacity="0.4"/>
					<path d="M30,180 L130,160 L230,190 L330,170" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
					<path d="M100,220 L200,200 L300,230 L400,210" stroke="currentColor" stroke-width="1" fill="none" opacity="0.3"/>
					
					<!-- Network nodes -->
					<circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.7"/>
					<circle cx="150" cy="80" r="2" fill="currentColor" opacity="0.6"/>
					<circle cx="250" cy="60" r="3" fill="currentColor" opacity="0.8"/>
					<circle cx="350" cy="90" r="2" fill="currentColor" opacity="0.5"/>
					<circle cx="80" cy="120" r="2" fill="currentColor" opacity="0.6"/>
					<circle cx="180" cy="100" r="3" fill="currentColor" opacity="0.7"/>
					<circle cx="280" cy="130" r="2" fill="currentColor" opacity="0.5"/>
					<circle cx="130" cy="160" r="3" fill="currentColor" opacity="0.8"/>
					<circle cx="230" cy="190" r="2" fill="currentColor" opacity="0.6"/>
					<circle cx="200" cy="200" r="3" fill="currentColor" opacity="0.7"/>
				</svg>
			</div>
			
			<!-- Security shield pattern -->
			<div class="absolute top-1/4 right-1/4 opacity-10">
				<svg width="120" height="120" viewBox="0 0 24 24" fill="none">
					<path d="M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2Z" stroke="currentColor" stroke-width="0.5" fill="currentColor" opacity="0.1"/>
					<path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="1" fill="none"/>
				</svg>
			</div>
			
			<!-- Blockchain blocks pattern -->
			<div class="absolute bottom-1/4 left-1/4 opacity-8">
				<svg width="100" height="40" viewBox="0 0 100 40" fill="none">
					<rect x="0" y="10" width="15" height="15" stroke="currentColor" stroke-width="0.5" fill="currentColor" opacity="0.1"/>
					<rect x="20" y="10" width="15" height="15" stroke="currentColor" stroke-width="0.5" fill="currentColor" opacity="0.1"/>
					<rect x="40" y="10" width="15" height="15" stroke="currentColor" stroke-width="0.5" fill="currentColor" opacity="0.1"/>
					<rect x="60" y="10" width="15" height="15" stroke="currentColor" stroke-width="0.5" fill="currentColor" opacity="0.1"/>
					<path d="M15 17.5L20 17.5" stroke="currentColor" stroke-width="0.5"/>
					<path d="M35 17.5L40 17.5" stroke="currentColor" stroke-width="0.5"/>
					<path d="M55 17.5L60 17.5" stroke="currentColor" stroke-width="0.5"/>
				</svg>
			</div>
		</div>

		<header
			class="section-px z-50 container mx-auto grid place-items-center text-center text-balance dark:text-white"
			data-enter-container
		>
			<div class="grid max-w-prose place-items-center justify-center gap-6 lg:max-w-[80ch]">
				<h1 class="text-display w-full text-balance lg:!text-7xl dark:text-shadow-lg" data-enter>
					<span class="block"><AnimateText text={title} /></span>
				</h1>

				<p
					data-enter
					class="text-headline block max-w-[45ch] text-pretty opacity-80 transition duration-500 ease-out dark:text-shadow-lg"
				>
					{subtitle}
				</p>
			</div>

			{#if callsToAction.length > 0}
				<div class="mt-8 flex gap-4" data-enter>
					{#each callsToAction as cta, index}
						<Button href={cta.href} size="lg" variant="secondary" class="text-white max-lg:hidden"
							>{cta.label}</Button
						>
						<Button
							href={cta.href}
							size="md"
							variant={index % 2 === 0 ? "secondary" : "ghost"}
							class="lg:hidden">{cta.label}</Button
						>
					{/each}
				</div>
			{/if}
		</header>
	</div>
</div>
