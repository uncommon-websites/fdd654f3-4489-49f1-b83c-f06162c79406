<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";

	// Icons
	import IconShieldCheck from "~icons/lucide/shield-check";
	import IconZap from "~icons/lucide/zap";
	import IconActivity from "~icons/lucide/activity";
	import IconFileCheck from "~icons/lucide/file-check";
	import IconScale from "~icons/lucide/scale";
	import IconNetwork from "~icons/lucide/network";
</script>

<CenteredTextOnlyHero
	title="Prove your data will recover before disaster strikes"
	subtitle="Autonomous testing and cryptographic proofs verify your backup resilience. When verification fails, Immune autonomously heals your infrastructure."
	imageSrc="/generated/image-a-cinematic-editorial-style-photograph-o.webp"
/>
<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		'https://cdn.brandfetch.io/atlassian.com/w/400/h/400/logo',
		'https://cdn.brandfetch.io/dropbox.com/w/400/h/400/logo',
		'https://cdn.brandfetch.io/zendesk.com/w/400/h/400/logo',
		'https://cdn.brandfetch.io/asana.com/w/400/h/400/logo'
	]}
/>

<Summary
	title="What we do"
	text="Immune verifies that your data will actually recover when disaster strikes. We autonomously test backups through cryptographic proofs, giving CISOs provable confidence that their recovery systems work before they're needed. When verification fails, our platform autonomously heals your infrastructure to ensure resilience."
/>

<Testimonials
	testimonials={[
		{
			name: "Marcus Chen",
			position: "CISO",
			company: "CloudCore Technologies",
			quote:
				"Before Immune, we tested 8% of our backups annually. Now we verify 100% with cryptographic proofs every week. When we discovered corrupted backups in our legacy system, Immune autonomously healed them before they became a crisis. That's confidence we can actually measure.",
			image: "/generated/image-cinematic-editorial-headshot-of-marcus-c.webp"
		},
		{
			name: "Rebecca Okonkwo",
			position: "VP of Security Operations",
			company: "Meridian Financial",
			quote:
				"Our compliance auditors used to spend 40 hours quarterly verifying backup integrity. Immune's cryptographic proofs reduced that to 2 hours. More importantly, we eliminated the recovery uncertainty that kept me up at night. When disaster strikes, we'll know our data will actually restore.",
			image: "/generated/image-cinematic-editorial-headshot-of-rebecca-.webp"
		},
		{
			name: "Henrik Johansson",
			position: "Director of IT Infrastructure",
			company: "Nordic Data Systems",
			quote:
				"We avoided a $2.3M ransomware loss because Immune detected backup tampering 3 weeks before the attack surfaced. The autonomous healing caught corruption we didn't know existed. Our board now sees backup verification as a competitive advantage, not just compliance overhead.",
			image: "/generated/image-cinematic-editorial-headshot-of-henrik-j.webp"
		}
	]}
/>

<Features
	title="Recovery confidence through verification"
	subtitle="Stop hoping your backups work and start proving they do. Immune delivers cryptographic certainty that your data will recover when you need it most."
	features={[
		{
			title: "Cryptographic recovery proofs",
			description:
				"Mathematical certainty that your backups will restore successfully, not just assumptions. Every recovery path is verified and proven before disaster strikes.",
			icon: IconShieldCheck
		},
		{
			title: "Autonomous testing",
			description:
				"Continuous verification runs automatically across your entire infrastructure. No manual intervention required to maintain recovery confidence.",
			icon: IconZap
		},
		{
			title: "Self-healing infrastructure",
			description:
				"When verification fails, Immune automatically remediates the issue. Your backup resilience improves continuously without security team overhead.",
			icon: IconActivity
		},
		{
			title: "Real-time verification dashboard",
			description:
				"Instant visibility into which systems are recovery-ready and which need attention. Confidence at a glance, backed by cryptographic proof.",
			icon: IconFileCheck
		},
		{
			title: "Compliance-ready evidence",
			description:
				"Auditable proof of recovery capability for SOC 2, GDPR, and regulatory requirements. Turn backup verification from risk to competitive advantage.",
			icon: IconScale
		},
		{
			title: "MSP and enterprise integration",
			description:
				"Deploy across multi-tenant environments or complex enterprise infrastructure. Built for scale from day one.",
			icon: IconNetwork
		}
	]}
/>
<AboutTeaser />
<CallToAction 
	title="Stop hoping your backups work"
	subtitle="Start proving they do"
	description="Most organizations test less than 10% of their backups annually. When disaster strikes, hope isn't a recovery strategy. See how Immune delivers cryptographic proof that your data will actually restore."
	imageSrc="/generated/image-a-confident-chief-information-security-o.webp"
	callsToAction={[
		{
			href: "/contact",
			label: "Request a demo",
			variant: "primary"
		},
		{
			href: "/contact",
			label: "Talk to our team",
			variant: "secondary"
		}
	]}
/>
