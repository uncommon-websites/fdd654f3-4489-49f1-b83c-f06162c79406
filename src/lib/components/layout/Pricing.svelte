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
		title = "Professional valuation reports in minutes, not weeks",
		subtitle = "Built for CPAs and valuation experts who bill by the hour but don't want to waste their time.",
		tierNames = ["Starter", "Professional", "Pay-per-report"],
		features = [],
		tiers = [
			{
				name: "Starter",
				monthlyPrice: 149,
				yearlyPrice: null,
				description: "For solo practitioners and small firms",
				features: [
					"10 valuation reports per month",
					"Upload Excel, CSV, or PDF financials",
					"AI-powered report narratives",
					"Editable PDF and Word exports",
					"Market multiples database access",
					"Standard email support"
				],
				cta: {
					label: "Start Free 14-Day Trial",
					href: "/signup?plan=starter"
				}
			},
			{
				name: "Professional",
				monthlyPrice: 399,
				yearlyPrice: null,
				description: "For established firms and high-volume users",
				features: [
					"Unlimited valuation reports",
					"All Starter features included",
					"White-label report customization",
					"Advanced assumption controls",
					"Priority support (4-hour response)",
					"Custom report templates",
					"Team collaboration tools"
				],
				cta: {
					label: "Start Free 14-Day Trial",
					href: "/signup?plan=professional"
				},
				highlight: true
			},
			{
				name: "Pay-per-report",
				monthlyPrice: 79,
				yearlyPrice: null,
				description: "No subscription required",
				features: [
					"Single valuation report",
					"All core AI features",
					"Professional PDF export",
					"No monthly commitment",
					"Perfect for occasional use"
				],
				cta: {
					label: "Generate One Report",
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
			Trusted by CPAs, forensic accountants, and boutique valuation firms who generate $5,000-$20,000 reports but refuse to waste time on Excel gymnastics.
		</p>
	</div>

	<!-- FAQ Section -->
	<div class="mt-24">
		<div class="max-w-3xl mx-auto">
			<h3 class="text-title2 text-foreground mb-12 text-center">Frequently asked questions</h3>
			<div class="space-y-8">
				<div>
					<h4 class="text-headline text-foreground mb-3">What valuation methods does FlashValue support?</h4>
					<p class="text-body text-emphasis-medium">Currently, FlashValue focuses on market-based approaches using EV/EBITDA and revenue multiples. We're adding DCF and asset-based methods soon.</p>
				</div>
				<div>
					<h4 class="text-headline text-foreground mb-3">Can I customize the reports for my firm?</h4>
					<p class="text-body text-emphasis-medium">Yes. Professional plan includes white-label customization, custom templates, and full editorial control over all assumptions and narratives.</p>
				</div>
				<div>
					<h4 class="text-headline text-foreground mb-3">How does FlashValue handle data security?</h4>
					<p class="text-body text-emphasis-medium">All client data is encrypted in transit and at rest. We're SOC 2 compliant and never store financial data longer than necessary to generate your report.</p>
				</div>
				<div>
					<h4 class="text-headline text-foreground mb-3">What happens after my trial ends?</h4>
					<p class="text-body text-emphasis-medium">You'll be automatically charged for your selected plan unless you cancel. You keep access to all previously generated reports even if you cancel.</p>
				</div>
				<div>
					<h4 class="text-headline text-foreground mb-3">Do the reports meet professional standards?</h4>
					<p class="text-body text-emphasis-medium">Yes. FlashValue follows AICPA and NACVA guidelines. All reports include proper disclosures, methodology explanations, and are fully editable to meet your specific compliance requirements.</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Compliance Note -->
	<div class="mt-16 text-center">
		<p class="text-caption text-emphasis-low max-w-3xl mx-auto">
			FlashValue follows AICPA and NACVA professional standards. All reports include proper disclosures, methodology explanations, and are fully customizable to meet your firm's specific compliance requirements. SOC 2 compliant with enterprise-grade security.
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
