<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Accuracy first",
			description: "Every calculation is transparent and defensible. When your reputation depends on precision, FlashValue delivers bulletproof methodologies and audit-ready documentation."
		},
		{
			title: "Built for speed",
			description: "Eliminate the bottlenecks that keep you from scaling. AI-powered automation handles the grunt work so you can focus on analysis and client relationships."
		},
		{
			title: "Professional grade",
			description: "No shortcuts, no compromises. Built to meet the standards that forensic accountants, CPAs, and valuation professionals demand in high-stakes situations."
		},
		{
			title: "Trusted by experts",
			description: "Purpose-built for the professionals who know they won't get a second chance. Solo CPAs, boutique firms, and forensic accountants who bill by the hour but want to earn by the outcome."
		}
	];
</script>

<SecondaryHero
	title="Valuation work you can trust"
	subtitle="Built by a founder who witnessed manual process failures"
	imageSrc="/generated/image-a-business-valuation-professional-presen.webp"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"FlashValue exists because Patrick saw what happens when manual processes fail. After years in digital forensics, investigating financial fraud and crypto crime, he started working with forensic accountants and valuation professionals. The same pattern emerged everywhere: brilliant professionals wasting hours on Excel gymnastics and Word document formatting.",
		"He watched CPAs billing $10,000 for reports that took weeks to complete—not because the analysis was complex, but because the manual processes were broken. Outdated tools. Copy-paste workflows. Excel hell. People doing high-stakes work with systems that couldn't scale.",
		"So he built FlashValue. An AI-powered valuation engine that handles the grunt work—normalizing financials, applying comps-based methods, generating clean narratives—so accountants can do 10x the work, charge the same, and never miss a beat. Because what's the point of expertise that can't scale?"
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- Team and Investors sections removed - no explicit team members or investors mentioned in company context -->

<!-- CTA Section -->
<CallToAction
	title="Talk with the founding team"
	subtitle="Questions? Custom needs? Want to hear why we built it this way?"
	description="Book time directly with Patrick to discuss how FlashValue can eliminate your valuation bottlenecks and help you scale your practice without sacrificing quality."
/>
