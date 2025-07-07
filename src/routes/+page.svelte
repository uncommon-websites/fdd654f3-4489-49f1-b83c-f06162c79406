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
	title="Guaranteed recovery when traditional backups fail"
	subtitle="Blockchain-powered recovery network with immutable verification and parallel rehydration. Eliminate the 50% industry failure rate with recovery that works when you need it most."
	imageSrc="/generated/image-a-professional-it-security-team-in-a-dim.webp"
/>
<LogoScroller
	label="Trusted by MSPs and enterprise IT leaders"
	logoUrls={[
		'https://logo.clearbit.com/microsoft.com',
		'https://logo.clearbit.com/cisco.com',
		'https://logo.clearbit.com/vmware.com',
		'https://logo.clearbit.com/dell.com'
	]}
/>

<Summary
	title="What we do"
	text="Respawn is building a blockchain-powered recovery network that provides immutable verification, parallel rehydration, and guaranteed recovery for organizations facing AI-powered cyber attacks, ransomware, and data loss. Our platform eliminates the 50% industry failure rate in traditional recovery systems by offering cryptographically verified, distributed recovery that works when centralized solutions fail."
/>

<Testimonials
	testimonials={[
		{
			name: "Marcus Chen",
			position: "CISO",
			company: "TechFlow Industries",
			quote:
				"After our traditional backup failed during a ransomware attack, Respawn's guaranteed recovery saved us from a $2M loss. The parallel rehydration got us back online in minutes, not days.",
			image: "/generated/image-a-confident-ciso-standing-in-a-modern-of.webp"
		},
		{
			name: "Sarah Rodriguez",
			position: "MSP Operations Director",
			company: "SecureNet Solutions",
			quote:
				"Respawn's immutable verification gives our clients confidence that their recovery will work. We've eliminated failed recovery attempts and the reputation damage that comes with them.",
			image: "/generated/image-a-professional-woman-leading-a-cybersecu.webp"
		},
		{
			name: "David Kim",
			position: "IT Director",
			company: "MidMarket Manufacturing",
			quote:
				"The blockchain-powered verification means we can prove our data integrity to auditors instantly. Respawn turned our biggest compliance headache into our strongest security asset.",
			image: "/generated/image-an-enterprise-security-professional-anal.webp"
		}
	]}
/>

<Features
	title="Why choose Respawn"
	subtitle="Blockchain-powered recovery that works when traditional backups fail"
	features={[
		{
			title: "Guaranteed recovery",
			description:
				"Eliminate the 50% industry failure rate with cryptographically verified recovery that works when you need it most, backed by immutable blockchain verification."
		},
		{
			title: "Parallel rehydration",
			description:
				"Recover in minutes, not days, with simultaneous data streaming from multiple recovery nodes, dramatically reducing downtime costs and business impact."
		},
		{
			title: "Immutable verification",
			description:
				"Cryptographically prove your backup integrity with blockchain-based verification that can't be tampered with, even by attackers with admin credentials."
		},
		{
			title: "Zero trust architecture",
			description:
				"Trust nothing, verify everything. Our distributed system eliminates single points of failure and provides mathematical proof of data integrity."
		},
		{
			title: "MSP-ready platform",
			description:
				"Purpose-built for Managed Service Providers with multi-tenant management, white-label options, and seamless integration into existing workflows."
		},
		{
			title: "Compliance automation",
			description:
				"Automatically generate compliance reports and audit trails with cryptographic proof of data protection, eliminating manual verification processes."
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for guaranteed recovery"
	useCases={[
		{
			title: "MSP service differentiation",
			description: "Stand out from competitors by offering guaranteed recovery that actually works. Eliminate the reputation damage from failed recovery attempts and provide your clients with cryptographically verified data protection that traditional backup solutions can't match.",
			image: "/generated/image-a-technician-working-in-a-server-room-wi.webp",
			link: {
				href: "/use-cases/msp-services",
				label: "Learn more"
			}
		},
		{
			title: "Enterprise ransomware protection",
			description: "Protect your organization from the growing threat of AI-powered ransomware attacks with immutable verification and parallel recovery. When attackers compromise your primary systems, Respawn ensures your data remains intact and recoverable.",
			image: "/generated/image-a-cybersecurity-expert-presenting-to-a-g.webp",
			link: {
				href: "/use-cases/ransomware-protection",
				label: "Learn more"
			}
		},
		{
			title: "Compliance and audit readiness",
			description: "Automatically generate compliance reports with cryptographic proof of data integrity and availability. Eliminate manual audit processes and provide regulators with mathematical verification of your data protection capabilities.",
			image: "/generated/image-a-security-architect-reviewing-recovery-.webp",
			link: {
				href: "/use-cases/compliance",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction 
	title="Ready to guarantee your recovery?" 
	subtitle="Join the founding members"
	description="Eliminate failed recovery attempts and protect your organization from the growing threat of AI-powered attacks. Join the MSPs and enterprises already leveraging Respawn's guaranteed recovery network."
	imageSrc="/generated/image-an-it-team-celebrating-a-successful-data.webp"
	callsToAction={[
		{
			href: "mailto:patrick@respawn.com",
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
