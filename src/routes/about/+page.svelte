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
			title: "Recovery first",
			description: "Every architectural decision prioritizes guaranteed recovery over convenience, ensuring your data is always recoverable when you need it most, eliminating the 50% industry failure rate."
		},
		{
			title: "Immutable verification",
			description: "We architect cryptographic verification into every layer, providing mathematical proof of data integrity that can't be tampered with, even by attackers with admin credentials."
		},
		{
			title: "Zero trust security",
			description: "Building distributed infrastructure that trusts nothing and verifies everything, where no single entity can compromise your recovery capabilities or data integrity."
		},
		{
			title: "MSP focused",
			description: "Purpose-built for Managed Service Providers and enterprise IT teams, with multi-tenant management and seamless integration into existing security workflows."
		}
	];
</script>

<SecondaryHero
	title="Guaranteed recovery"
	subtitle="when traditional backups fail"
	imageSrc="/generated/image-a-group-of-diverse-cybersecurity-profess.webp"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"When we started seeing MSPs lose clients due to failed recovery attempts, we knew something had to change. Traditional backup solutions were failing 50% of the time when organizations needed them most. Ransomware attacks were getting more sophisticated, AI-powered threats were bypassing existing defenses, and businesses were losing millions because their 'guaranteed' backups simply didn't work when it mattered.",
		"So we built something that actually works. Using blockchain technology, we created a recovery network that provides immutable verification and parallel rehydration—mathematical proof that your data is protected and can be recovered in minutes, not days. Our goal was never just to store backups—it was to guarantee recovery when traditional systems fail. We designed Respawn specifically for MSPs and enterprise IT teams who can't afford to let their clients down.",
		"Respawn is more than technology. It's a commitment that recovery should be guaranteed, not hoped for. Whether you're an MSP protecting dozens of clients or an enterprise safeguarding critical operations, Respawn ensures your data is always recoverable. We're not just building backup solutions—we're building the recovery infrastructure that organizations can actually depend on when everything else fails."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- Team and Investors sections removed - no explicit team members or investors mentioned in company context -->

<!-- CTA Section -->
<CallToAction
	title="Ready to guarantee your recovery?"
	subtitle="Join the founding members"
	description="Join the MSPs and enterprises already leveraging Respawn's blockchain-powered recovery network to eliminate failed recovery attempts and protect against AI-powered attacks."
/>
