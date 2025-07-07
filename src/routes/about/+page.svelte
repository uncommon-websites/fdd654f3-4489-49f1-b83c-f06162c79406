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
			description: "Every architectural decision prioritizes guaranteed recovery over convenience. When business continuity is non-negotiable, Respawn's your safety net."
		},
		{
			title: "Provably secure",
			description: "Built on a forensic-proof audit log where every action is verified and tamper-resistant. Mathematical proof of data integrity that can't be compromised."
		},
		{
			title: "Zero trust architecture",
			description: "No single point of failure, no blind trust in vendors. Self-healing architecture that replicates across a geo-distributed node mesh and repairs faults automatically."
		},
		{
			title: "Built for professionals",
			description: "Trusted by the teams who know they won't get a second chance after an attack. Purpose-built for MSPs, IT teams, and security professionals."
		}
	];
</script>

<SecondaryHero
	title="Recovery you can trust"
	subtitle="Built by founders who witnessed backup failures"
	imageSrc="/generated/image-a-professional-cybersecurity-team-engage.webp"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Respawn exists because our founders saw what happens when traditional recovery fails. Patrick spent years in digital forensics, investigating catastrophic cyberattacks and failed recovery efforts. He led engagements where businesses collapsed—not because they didn't have backups, but because those backups didn't work.",
		"Marston had spent most of his career architecting high-resilience infrastructure in security-sensitive environments. Together, they recognized the foundational flaw in the systems we're all still using—50% of traditional backup restores fail under real pressure.",
		"They built Respawn to fix that. From the ground up. Today, Respawn is the only backup and recovery network built on blockchain-verified backups, distributed storage, and parallel rehydration. It's cyber recovery designed not just to feel safe, but to provably be safe. Because what's the point of a backup that might not come through?"
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- Team and Investors sections removed - no explicit team members or investors mentioned in company context -->

<!-- CTA Section -->
<CallToAction
	title="Talk with the founding team"
	subtitle="Questions? Custom needs? Want to hear why we built it this way?"
	description="Book time directly with Patrick or Marston to discuss how Respawn can guarantee verified, breach-resilient recovery across your entire environment."
/>
