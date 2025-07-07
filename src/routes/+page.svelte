<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";
	import UseCases from "$lib/components/layout/UseCases.svelte";
</script>

<CenteredTextOnlyHero
	title="Decentralized cloud storage for Web3"
	subtitle="Censorship-resistant, privacy-preserving data storage built on Cosmos SDK. Store your data with complete control and unbreakable security."
	imageSrc="/generated/image-a-serene-landscape-featuring-a-lush-fore.webp"
/>
<LogoScroller
	label="Trusted by Web3 leaders"
	logoUrls={[
		'https://logo.clearbit.com/polygon.technology',
		'https://logo.clearbit.com/chainlink.com',
		'https://logo.clearbit.com/uniswap.org',
		'https://logo.clearbit.com/opensea.io'
	]}
/>

<Summary
	title="What we do"
	text="Jackal Labs builds a decentralized cloud storage network that provides censorship-resistant, privacy-preserving data storage for Web3 applications. Our platform leverages the Cosmos SDK to deliver provable data storage solutions that give users complete control over their data. We're creating the infrastructure that powers the next generation of decentralized applications."
/>

<Testimonials
	testimonials={[
		{
			name: "Zara Okafor",
			position: "Lead Developer",
			company: "DeFi Nexus",
			quote:
				"Jackal's decentralized storage reduced our deployment time by 60%. What used to take weeks of infrastructure setup now takes hours. The seamless integration with our Web3 stack eliminated countless bottlenecks.",
			image: "/generated/image-a-professional-woman-coding-in-a-modern-.webp"
		},
		{
			name: "Kieran Volkov",
			position: "Security Architect",
			company: "CryptoVault Solutions",
			quote:
				"After the centralized cloud outage cost us $200K, we switched to Jackal. The censorship-resistant architecture and cryptographic proofs give us bulletproof data integrity. Zero single points of failure.",
			image: "/generated/image-a-professional-man-in-a-tech-startup-wor.webp"
		},
		{
			name: "Thalia Reeves",
			position: "Head of Operations",
			company: "BlockChain Media",
			quote:
				"Jackal cut our storage costs by 45% while improving reliability. The provable storage eliminates expensive audits and compliance overhead. Our CFO was amazed at the ROI within just three months.",
			image: "/generated/image-a-professional-woman-presenting-in-a-cor.webp"
		}
	]}
/>

<Features
	title="Why choose Jackal Labs"
	subtitle="Decentralized cloud storage built for Web3"
	features={[
		{
			title: "Censorship-resistant storage",
			description:
				"Your data remains accessible and immutable, protected from takedowns and centralized control with our decentralized network architecture."
		},
		{
			title: "Privacy-preserving encryption",
			description:
				"Advanced cryptographic techniques ensure your data stays private and secure, with zero-knowledge proofs protecting your information from unauthorized access."
		},
		{
			title: "Provable data integrity",
			description:
				"Cryptographically verify your data's integrity and availability with mathematical proofs that guarantee storage providers are maintaining your files correctly."
		},
		{
			title: "Cosmos SDK interoperability",
			description:
				"Built on the robust Cosmos SDK framework, enabling seamless integration with the broader Web3 ecosystem and cross-chain compatibility."
		},
		{
			title: "Web3-native infrastructure",
			description:
				"Purpose-built for decentralized applications with APIs and SDKs designed specifically for blockchain developers and Web3 use cases."
		},
		{
			title: "Decentralized reliability",
			description:
				"Eliminate single points of failure with distributed storage across multiple nodes, ensuring your data remains available even if individual providers go offline."
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for decentralized cloud storage"
	useCases={[
		{
			title: "Web3 application development",
			description: "Build decentralized applications with confidence using censorship-resistant storage that can't be taken down or manipulated by centralized authorities. Our infrastructure ensures your dApp's data remains available and immutable, providing the reliability your users expect from Web3 applications.",
			image: "/generated/image-a-diverse-group-of-web3-developers-colla.webp",
			link: {
				href: "/use-cases/web3-development",
				label: "Learn more"
			}
		},
		{
			title: "Decentralized network infrastructure",
			description: "Scale your blockchain infrastructure with distributed storage that eliminates single points of failure and provides global data availability. Our network ensures your critical data remains accessible across all nodes, supporting the decentralized future of the internet.",
			image: "/generated/image-an-international-team-of-professionals-i.webp",
			link: {
				href: "/use-cases/network-infrastructure",
				label: "Learn more"
			}
		},
		{
			title: "Privacy-first data protection",
			description: "Protect sensitive information with zero-knowledge encryption and provable privacy guarantees that keep your data secure from unauthorized access. Our cryptographic proofs ensure that only you can access your data, while still enabling verification of storage integrity.",
			image: "/generated/image-a-group-of-security-experts-in-a-cozy-we.webp",
			link: {
				href: "/use-cases/privacy-protection",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction 
	title="Ready to build on Web3?" 
	subtitle="Start storing today"
	description="Join the decentralized revolution with censorship-resistant, privacy-preserving storage that puts you in control. Get started with Jackal Labs and experience the future of data storage."
	imageSrc="/generated/image-a-joyful-developer-in-a-casual-office-se.webp"
	callsToAction={[
		{
			href: "mailto:patrick@jackallabs.io",
			label: "Get started",
			variant: "primary"
		},
		{
			href: "/about",
			label: "Learn more",
			variant: "secondary"
		}
	]}
/>
