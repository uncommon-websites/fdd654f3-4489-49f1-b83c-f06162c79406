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
	import IconCheck from "~icons/lucide/check";
	import IconX from "~icons/lucide/x";
	import NumberFlow from "@number-flow/svelte";
	import LogoScroller from "./LogoScroller.svelte";

	// Props
	const {
		title = "Decentralized storage that scales with you",
		subtitle = "Choose the plan that fits your Web3 storage needs",
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
				name: "Developer",
				monthlyPrice: 19.99,
				yearlyPrice: 15.99, // 20% savings
				description: "Perfect for Web3 developers and small dApps",
				features: [
					"100GB decentralized storage",
					"100K API requests/month",
					"Censorship-resistant storage",
					"End-to-end encryption",
					"Basic provable storage",
					"10 Mbps network bandwidth",
					"Community support"
				],
				cta: {
					label: "Start building",
					href: "/signup?plan=developer"
				}
			},
			{
				name: "Pro",
				monthlyPrice: 79.99,
				yearlyPrice: 63.99, // 20% savings
				description: "For growing dApps and production workloads",
				features: [
					"1TB decentralized storage",
					"1M API requests/month",
					"5x data replication",
					"Advanced provable storage",
					"100 Mbps network bandwidth",
					"Priority support",
					"99.5% uptime SLA",
					"Custom domains"
				],
				cta: {
					label: "Scale up",
					href: "/signup?plan=pro"
				},
				highlight: true
			},
			{
				name: "Enterprise",
				monthlyPrice: null,
				yearlyPrice: null,
				description: "For large-scale Web3 applications and organizations",
				features: [
					"Unlimited storage capacity",
					"Unlimited API requests",
					"Custom data replication",
					"Custom provable storage",
					"Dedicated node deployment",
					"White-label solutions",
					"99.9% uptime SLA",
					"Dedicated account manager"
				],
				cta: {
					label: "Contact sales",
					href: "/contact"
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
	<div class="flex flex-col items-baseline justify-between lg:flex-row">
		<SectionHeader {title} {subtitle} />

		<div class="mb-8 flex justify-center">
			<div class="inline-flex items-center rounded-full bg-muted p-0.5 gap-0.5">
				<button
					class={[
						'rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200',
						!annual ? 'bg-background text-foreground' : 'text-muted-foreground hover:text-foreground'
					]}
					onclick={() => (annual = false)}
				>
					Monthly
				</button>
				<button
					class={[
						'rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200',
						annual ? 'bg-background text-foreground' : 'text-muted-foreground hover:text-foreground'
					]}
					onclick={() => (annual = true)}
				>
					Annual <span class="text-xs ml-1 text-muted-foreground">Save 20%</span>
				</button>
			</div>
		</div>
	</div>

	<div class="bb grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each tiers as tier}
			<div
				class="flex flex-col rounded-xl bg-background p-6 ring ring-border transition-all duration-300 dark:bg-card dark:ring-border"
				class:ring-2={tier.highlight}
				class:ring-primary={tier.highlight}
				class:dark:ring-primary={tier.highlight}
				class:transform={tier.highlight}
			class:-translate-y-1={tier.highlight}
			>
				<div class="mb-8">
					<h3 class="text-title3 mb-4 text-foreground">{tier.name}</h3>
					<div class="mt-2 flex items-baseline">
						{#if tier.monthlyPrice === null && tier.yearlyPrice === null}
							<span class="text-title2 text-foreground">Custom</span>
						{:else}
							<NumberFlow
								class="text-title2 [&::part\(suffix\)]:text-caption dark:text-white"
								format={{
									style: "currency",
									currency: "USD",
									trailingZeroDisplay: "stripIfInteger"
								}}
								value={annual ? tier.yearlyPrice : tier.monthlyPrice}
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
								<IconCheck class="text-primary size-5 flex-shrink-0" />
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
	<div class="mt-32">
		<!-- Responsive table wrapper with horizontal scroll on mobile -->
		<!-- <div class=" hidden overflow-x-auto px-4 sm:mx-0 sm:block sm:px-0">
			<table
				class="w-full min-w-full border-separate border-spacing-0 border-gray-200 text-left dark:border-gray-700"
			>
				<thead>
					<tr>
						<th
							class="sticky left-0 min-w-[120px] border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
						>
							<span class="sr-only">Feature</span>
						</th>
						{#each tierNames as tierName}
							<th
								class="text-headline min-w-[100px] border-b border-gray-200 p-4 text-start font-normal dark:border-gray-700"
							>
								{tierName}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each features as feature}
						<tr>
							<td class="text-caption">
								{feature.name}
							</td>
							{#each tierNames as tierName}
								<td
									class="min-w-[100px] border-b border-gray-200 p-4 text-start text-gray-600 dark:border-gray-700 dark:text-gray-300"
								>
									{#if typeof feature.tiers[tierName] === "boolean"}
										{#if feature.tiers[tierName]}
											<IconCheck
												class="text-primary-600 dark:text-primary-400 mx-auto size-5 sm:mx-0"
											/>
										{:else}
											<IconX class="mx-auto size-5 text-gray-400 sm:mx-0" />
										{/if}
									{:else}
										{feature.tiers[tierName]}
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div> -->

		<!-- Mobile feature comparison (alternative view for very small screens) -->
		<div>
			<!-- Universal pricing comparison for mobile -->
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<!-- Sticky header with tier names -->
					<thead class="border-border sticky top-0 z-10 border-b">
						<tr>
							<th class="min-w-[120px] py-3 text-left">
								<span class="sr-only">Feature</span>
							</th>
							{#each tierNames as tierName, i}
								<th class="text-caption min-w-[100px] py-3 text-left text-foreground">
									{tierName}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody class="divide-border divide-y">
						{#each features as feature}
							<tr>
								<td class="text-body py-3 pr-8 font-medium lg:pr-0 text-foreground">
									{feature.name}
								</td>
								{#each tierNames as tierName, i}
									<td class="py-3">
										{#if typeof feature.tiers[tierName] === "boolean"}
											{#if feature.tiers[tierName]}
												<IconCheck class="text-primary size-5" />
											{:else}
												<IconX class="size-5 text-muted-foreground" />
											{/if}
										{:else}
											<span class="text-callout font-medium text-emphasis-medium">
												{feature.tiers[tierName]}
											</span>
										{/if}
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<LogoScroller />
</section>

<style lang="postcss">
	@reference '../../../app.css';

	:global(number-flow-svelte)::part(suffix) {
		@apply text-sm text-gray-400 dark:text-gray-500;
	}
</style>
