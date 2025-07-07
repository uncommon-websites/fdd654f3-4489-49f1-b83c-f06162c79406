<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
	import UseCases from "$lib/components/layout/UseCases.svelte";
</script>

<Hero
	title="Zero-trust recovery that never fails."
	subtitle="Blockchain-verified backups that guarantee instant recovery when attacks strike."
	imageSrc="/generated/image-a-group-of-diverse-individuals-engaged-i.webp"
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
	title="Not just storage. A new survival layer for your data."
	text="Traditional backups fail when you need them most. Most systems boast scheduled backups, but still break during breaches. Why? Because they rely on trust, static mirrors, or cloud infrastructure from providers targeted in the very threats you're trying to recover from. 50% failure rate. Days to restore. In today's attacks, that's too late."
/>

<Testimonials
	testimonials={[
		{
			name: "Marcus Chen",
			position: "CISO",
			company: "TechFlow Industries",
			quote:
				"After our traditional backup failed during a ransomware attack, Respawn's guaranteed recovery saved us from a $2M loss. The parallel rehydration got us back online in minutes, not days.",
			image: "/generated/image-a-confident-it-security-manager-standing.webp"
		},
		{
			name: "Sarah Rodriguez",
			position: "MSP Operations Director",
			company: "SecureNet Solutions",
			quote:
				"Respawn's immutable verification gives our clients confidence that their recovery will work. We've eliminated failed recovery attempts and the reputation damage that comes with them.",
			image: "/generated/image-an-msp-operations-director-leading-a-cyb.webp"
		},
		{
			name: "David Kim",
			position: "IT Director",
			company: "MidMarket Manufacturing",
			quote:
				"The blockchain-powered verification means we can prove our data integrity to auditors instantly. Respawn turned our biggest compliance headache into our strongest security asset.",
			image: "/generated/image-an-it-director-reviewing-backup-infrastr.webp"
		}
	]}
/>

<Features
	title="Business continuity that won't break"
	subtitle="No passwords to trust. No single vendor to fail. No risky restores from assumed-clean systems."
	features={[
		{
			title: "Guaranteed restore success",
			description:
				"Streams clean, verified data from multiple geo-distributed nodes in parallel for real, immediate recovery."
		},
		{
			title: "Zero-trust, by design",
			description:
				"Every upload, download, and config change is written to an immutable on-chain audit log. Visibility and provenance from byte one."
		},
		{
			title: "Resilient means recoverable",
			description:
				"Even if one zone or region goes dark, others activate instantly. Respawn is always live and rebuilds redundancy every 24 hours—without human help."
		},
		{
			title: "No more single point of failure",
			description:
				"Backups split and streamed across resilient mesh nodes on different infrastructure, in separate locations."
		},
		{
			title: "Every action, recorded",
			description:
				"Edits, restores, admin commands—even access attempts—are written on-chain and preserved forever."
		},
		{
			title: "No human intervention required",
			description:
				"The network continually checks and restores 3x redundancy with automated data self-healing."
		}
	]}
/>

<UseCases
	title="Be ready for the day your backups fail"
	subtitle="Inside hospitals, air-gapped finance teams, and manufacturing plants that can't afford downtime, Respawn picks up where your disaster plan ends."
	useCases={[
		{
			title: "MSP service differentiation",
			description: "Stand out from competitors by offering guaranteed recovery that actually works. Eliminate the reputation damage from failed recovery attempts and provide your clients with cryptographically verified data protection that traditional backup solutions can't match.",
			image: "/generated/image-a-professional-technician-working-in-a-s.webp",
			link: {
				href: "/use-cases/msp-services",
				label: "Learn more"
			}
		},
		{
			title: "Enterprise ransomware protection",
			description: "Stops malware from reextracting through backup restores. Shields from insider threats that exploit root privileges. Detects and routes around silent node failures or misconfigurations.",
			image: "/generated/image-a-security-architect-reviewing-recovery-.webp",
			link: {
				href: "/use-cases/ransomware-protection",
				label: "Learn more"
			}
		},
		{
			title: "Full stack recovery in sync",
			description: "Recovers full, distributed stacks in sync—with a single command. Recovery plans you can read at a glance with a visual dashboard of your environment's integrity, restore ability, audit logs, and sync timelines.",
			image: "/generated/image-an-it-team-monitoring-a-recovery-network.webp",
			link: {
				href: "/use-cases/compliance",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction 
	title="Your infrastructure isn't bulletproof. Your recovery should be." 
	subtitle="This isn't backup. This is uncompromising recovery."
	description="Talk to our executive team to pinpoint where your current risk lives—and how Respawn guarantees verified, breach-resilient recovery across every stack in your environment."
	imageSrc="/generated/image-a-cybersecurity-team-celebrating-success.webp"
	callsToAction={[
		{
			href: "mailto:patrick@respawn.com",
			label: "Book time with our founders",
			variant: "primary"
		},
		{
			href: "/about",
			label: "Learn more",
			variant: "secondary"
		}
	]}
/>
