<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";
	import UseCases from "$lib/components/layout/UseCases.svelte";
</script>

<CenteredTextOnlyHero
	title="Valuation reports in minutes, not days."
	subtitle="AI-powered engine that turns raw financials into audit-ready reports. Built for accountants who value precision and speed."
	imageSrc="/generated/image-a-professional-accountant-working-confid.webp"
/>

<Summary
	title="Professional valuation work, amplified."
	text="Upload financials. Answer context questions. Get defensible reports with AI-powered narratives. FlashValue eliminates the manual work that keeps you from scaling—no spreadsheet gymnastics, no template guesswork. Just precise, audit-ready valuations that maintain the standards your reputation depends on."
/>

<Testimonials
	testimonials={[
		{
			name: "Jennifer Walsh",
			position: "CPA",
			company: "Walsh & Associates",
			quote:
				"Two weeks to two days. The AI narratives are professional, calculations are solid. Clients notice the difference in turnaround time.",
			image: "/generated/image-a-confident-female-accountant-in-a-profe.webp"
		},
		{
			name: "Michael Torres",
			position: "Forensic Accountant",
			company: "Torres Valuation Services",
			quote:
				"In litigation, speed and defensibility matter equally. FlashValue delivers both. The methodology documentation stands up to scrutiny.",
			image: "/generated/image-a-male-cpa-working-with-financial-spread.webp"
		},
		{
			name: "Lisa Chen",
			position: "Managing Partner",
			company: "Precision Valuation Group",
			quote:
				"Scaled 3x without adding staff. FlashValue handles the manual work so we focus on analysis and client relationships.",
			image: "/generated/image-a-cpa-reviewing-business-valuation-repor.webp"
		}
	]}
/>

<Features
	title="Professional valuation work, streamlined"
	subtitle="Eliminate manual processes. Maintain professional standards. Scale your practice."
	features={[
		{
			title: "AI-powered narratives",
			description:
				"Professional reports with narratives trained on thousands of valuation documents. Clean, editable, defensible."
		},
		{
			title: "Automated normalization",
			description:
				"Upload raw financials. FlashValue normalizes data, identifies adjustments, applies industry standards automatically."
		},
		{
			title: "Comparable analysis",
			description:
				"Built-in comps analysis with real-time market data and industry-specific multiples. No manual research required."
		},
		{
			title: "Audit-ready output",
			description:
				"Reports that meet professional standards with proper documentation, assumptions, and methodology disclosure."
		},
		{
			title: "Transparent methodology",
			description:
				"Every calculation is traceable with clear documentation of assumptions and data sources. Court-tested rigor."
		},
		{
			title: "Speed without compromise",
			description:
				"Complete reports in minutes while maintaining the accuracy and defensibility your reputation requires."
		}
	]}
/>

<UseCases
	title="Professional amplification for high-trust work"
	subtitle="Solo CPAs to boutique firms. Scale your practice without compromising the standards your reputation depends on."
	useCases={[
		{
			title: "Solo practice scaling",
			description: "Handle more valuation work without additional staff. Automate manual processes while maintaining quality standards. Focus on client relationships, not spreadsheet formatting.",
			image: "/generated/image-a-solo-cpa-working-efficiently-in-a-mode.webp",
			link: {
				href: "/use-cases/solo-practice",
				label: "Learn more"
			}
		},
		{
			title: "Forensic accounting precision",
			description: "Defensible valuations for litigation, divorce proceedings, shareholder disputes. Transparent methodologies and professional documentation that withstand court scrutiny.",
			image: "/generated/image-a-forensic-accountant-analyzing-financia.webp",
			link: {
				href: "/use-cases/forensic-accounting",
				label: "Learn more"
			}
		},
		{
			title: "Boutique firm advantage",
			description: "Compete on speed without sacrificing quality. Deliver same-day preliminary valuations and comprehensive reports in days. Differentiate through efficiency.",
			image: "/generated/image-boutique-accounting-firm-partners-discus.webp",
			link: {
				href: "/use-cases/boutique-firms",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction 
	title="Scale your expertise. Maintain your standards." 
	subtitle="Professional amplification for high-trust work."
	description="See how FlashValue eliminates valuation bottlenecks while maintaining the accuracy and defensibility your reputation requires."
	imageSrc="/generated/image-a-business-professional-celebrating-succ.webp"
	callsToAction={[
		{
			href: "mailto:patrick@flashvalue.com",
			label: "Talk to our founders",
			variant: "primary"
		},
		{
			href: "/about",
			label: "Learn more",
			variant: "secondary"
		}
	]}
/>
