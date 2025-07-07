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
			title: "Decentralization first",
			description: "Every storage decision prioritizes distributing control across the network, eliminating single points of failure and ensuring true data sovereignty."
		},
		{
			title: "Privacy by design",
			description: "We architect cryptographic protection into every layer, ensuring your data remains yours and yours alone, with zero-knowledge proving its integrity."
		},
		{
			title: "Censorship resistance",
			description: "Building immutable infrastructure that preserves freedom of information, where no single entity can remove, modify, or block access to your data."
		},
		{
			title: "Web3 native",
			description: "Purpose-built for the decentralized web, with seamless integration into dApps and blockchain ecosystems through developer-friendly APIs."
		}
	];
</script>

<SecondaryHero
	title="Decentralizing the cloud"
	subtitle="for a censorship-resistant future"
	imageSrc="/mockups/airport-screen-1751894992432.png"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Back when cloud storage was becoming the norm, we started to ask a simple question: what happens when control isn't in your hands? We saw creators losing access to files overnight, platforms removing critical data, and governments pressuring providers to censor content. It didn't take much to realize that centralized storage wasn't just a technical risk—it was a threat to free expression and individual privacy in a connected world.",
		"So we built something better. Using the Cosmos SDK, we created a decentralized cloud storage network designed for the future of the internet: one where data is distributed, encrypted, and provably stored—without needing to trust any one company. Our goal was never just to store files—it was to protect people's right to keep them, no matter who they are, or where they live. We kept developers in mind too, making Jackal accessible and easy to integrate into any Web3 app.",
		"Jackal is more than code. It's a belief that privacy and persistence should be default, not deluxe. Whether you're a builder pushing the limits of Web3, or a user who wants their data to stay theirs, Jackal is here to give that control back to you. We're not just creating storage solutions—we're creating a freer internet where no voice gets erased."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- Team and Investors sections removed - no explicit team members or investors mentioned in company context -->

<!-- CTA Section -->
<CallToAction
	title="Ready to decentralize your data?"
	subtitle="Build on the censorship-resistant cloud"
	description="Join the Web3 developers and organizations already leveraging Jackal's decentralized storage network to create truly sovereign applications that can't be taken down or censored."
/>
