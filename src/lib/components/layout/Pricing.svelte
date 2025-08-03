<!--
@component Pricing

Please update features according to the company's product offering. Do not remove this comment.
-->
<script lang="ts">
	// Types
	type PricingTier = {
		name: string;
		monthlyPrice?: number | null;
		yearlyPrice?: number | null;
		description: string;
		features: string[];
		cta: {
			label: string;
			href: string;
		};
		highlight?: boolean;
	};

	type PricingFeature = {
		name: string;
		tiers: {
			[key: string]: boolean | string;
		};
	};

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	// Icons temporarily removed due to import issues
	// import IconCheck from "~icons/lucide/check";
	// import IconX from "~icons/lucide/x";
	import NumberFlow from "@number-flow/svelte";
	// LogoScroller removed for FlashValue pricing page

	// Props
	const {
		title = "Start generating valuation reports in minutes",
		subtitle = "No sales calls. No contracts. Just results.",
		tierNames = ["Developer", "Pro", "Enterprise"],
		features = [
			{
				name: "Storage capacity",
				tiers: {
					Developer: "100GB",
					Pro: "1TB",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "Data redundancy",
				tiers: {
					Developer: "3x replication",
					Pro: "5x replication",
					Enterprise: "Custom replication"
				}
			},
			{
				name: "API requests/month",
				tiers: {
					Developer: "100K",
					Pro: "1M",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "Censorship resistance",
				tiers: {
					Developer: true,
					Pro: true,
					Enterprise: true
				}
			},
			{
				name: "End-to-end encryption",
				tiers: {
					Developer: true,
					Pro: true,
					Enterprise: true
				}
			},
			{
				name: "Provable storage",
				tiers: {
					Developer: "Basic proofs",
					Pro: "Advanced proofs",
					Enterprise: "Custom proofs"
				}
			},
			{
				name: "Network bandwidth",
				tiers: {
					Developer: "10 Mbps",
					Pro: "100 Mbps",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "Cosmos SDK integration",
				tiers: {
					Developer: true,
					Pro: true,
					Enterprise: true
				}
			},
			{
				name: "Support response time",
				tiers: {
					Developer: "24 hours",
					Pro: "4 hours",
					Enterprise: "1 hour"
				}
			},
			{
				name: "Custom node deployment",
				tiers: {
					Developer: false,
					Pro: false,
					Enterprise: true
				}
			},
			{
				name: "SLA guarantee",
				tiers: {
					Developer: false,
					Pro: "99.5%",
					Enterprise: "99.9%"
				}
			}
		],
		tiers = [
			{
				name: "Starter",
				monthlyPrice: 99,
				yearlyPrice: null,
				description: "For solo CPAs and small firms",
				features: [
					"5 valuation reports per month",
					"Upload Excel, CSV, or PDF",
					"AI-generated report narratives",
					"Editable PDF and Word exports",
					"Access to EV/EBITDA valuation model",
					"Email support"
				],
				cta: {
					label: "Start Free 7-Day Trial",
					href: "/signup?plan=starter"
				}
			},
			{
				name: "Pro",
				monthlyPrice: 299,
				yearlyPrice: null,
				description: "For high-volume users and power firms",
				features: [
					"Unlimited reports",
					"All Starter features",
					"White-label report exports",
					"Editable assumption dashboard",
					"Early access to additional valuation methods (DCF, asset-based)",
					"Priority support"
				],
				cta: {
					label: "Start Free 7-Day Trial",
					href: "/signup?plan=pro"
				},
				highlight: true
			},
			{
				name: "Pay-as-you-go",
				monthlyPrice: 49,
				yearlyPrice: null,
				description: "Use FlashValue without a subscription",
				features: [
					"All core features",
					"One-off valuation report",
					"No monthly commitment",
					"Perfect for occasional use"
				],
				cta: {
					label: "Try One Now",
					href: "/signup?plan=payg"
				}
			}
		]
	}: {
		title?: string;
		subtitle?: string;
		tiers?: PricingTier[];
		features?: PricingFeature[];
		tierNames?: string[];
		caption?: string;
	} = $props();

	// State
	let annual = $state(true);
</script>

<section class="section-py section-px container mx-auto">
	<div class="flex flex-col items-center justify-center">
		<SectionHeader {title} {subtitle} />
	</div>

	<div class="bb grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each tiers as tier}
			<div
				class="bg-background ring-border dark:bg-card dark:ring-border flex flex-col rounded-xl p-6 ring transition-all duration-300"
				class:ring-2={tier.highlight}
				class:ring-primary={tier.highlight}
				class:dark:ring-primary={tier.highlight}
				class:transform={tier.highlight}
				class:-translate-y-1={tier.highlight}
			>
				<div class="mb-8">
					<h3 class="text-title3 text-foreground mb-4">{tier.name}</h3>
					<div class="mt-2 flex items-baseline">
						{#if tier.name === "Pay-as-you-go"}
							<NumberFlow
								class="text-title2 [&::part\(suffix\)]:text-caption dark:text-white"
								format={{
									style: "currency",
									currency: "USD",
									trailingZeroDisplay: "stripIfInteger"
								}}
								value={tier.monthlyPrice}
								suffix="/report"
							/>
						{:else if tier.monthlyPrice === null && tier.yearlyPrice === null}
							<span class="text-title2 text-foreground">Custom</span>
						{:else}
							<NumberFlow
								class="text-title2 [&::part\(suffix\)]:text-caption dark:text-white"
								format={{
									style: "currency",
									currency: "USD",
									trailingZeroDisplay: "stripIfInteger"
								}}
								value={tier.monthlyPrice}
								suffix="/month"
							/>
						{/if}
					</div>
					<p class="text-callout text-emphasis-medium mt-3">
						{tier.description}
					</p>
				</div>

				<div class="mb-8 flex-grow">
					<ul class="space-y-3">
						{#each tier.features as feature}
							<li class="flex items-center gap-2">
								<div class="text-primary size-5 flex-shrink-0">✓</div>
								<span class="text-body text-emphasis-medium">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="mt-auto">
					<Button
						href={tier.cta.href}
						variant={tier.highlight ? "primary" : "secondary"}
						class="w-full"
					>
						{tier.cta.label}
					</Button>
				</div>
			</div>
		{/each}
	</div>
	<!-- Trust Statement -->
	<div class="mt-16 text-center">
		<p class="text-body text-emphasis-medium max-w-2xl mx-auto">
			Trusted by professional accountants and valuation experts who bill by the hour but don't want to waste their time.
		</p>
	</div>

	<!-- FAQ Section -->
	<div class="mt-24">
		<div class="max-w-3xl mx-auto">
			<h3 class="text-title2 text-foreground mb-12 text-center">Frequently asked questions</h3>
			<div class="space-y-8">
				<div>
					<h4 class="text-headline text-foreground mb-3">What happens after the trial?</h4>
					<p class="text-body text-emphasis-medium">You'll be charged automatically unless you cancel.</p>
				</div>
				<div>
					<h4 class="text-headline text-foreground mb-3">Can I edit the valuation reports?</h4>
					<p class="text-body text-emphasis-medium">Yes. Reports are fully customizable and exportable in PDF or Word format.</p>
				</div>
				<div>
					<h4 class="text-headline text-foreground mb-3">What if I cancel my subscription?</h4>
					<p class="text-body text-emphasis-medium">You keep access to all previously generated reports.</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Compliance Note -->
	<div class="mt-16 text-center">
		<p class="text-caption text-emphasis-low max-w-3xl mx-auto">
			FlashValue follows AICPA and NACVA-aligned valuation methodologies. Reports are editable to meet your firm's compliance standards.
		</p>
	</div>
	<!-- LogoScroller removed for FlashValue pricing page -->
</section>

<style lang="postcss">
	@reference '../../../app.css';

	:global(number-flow-svelte)::part(suffix) {
		@apply text-sm text-gray-400 dark:text-gray-500;
	}
</style>
