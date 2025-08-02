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
	title="From raw financials to audit-ready reports in minutes."
	subtitle="AI-powered valuation engine that eliminates Excel gymnastics and Word document guesswork. Built for accountants who want to deliver faster without sacrificing accuracy."
	imageSrc="/generated/image-a-professional-accountant-working-at-a-m.webp"
/>

<Summary
	title="Not just automation. A new standard for valuation work."
	text="Manual valuation processes waste hours on spreadsheets and templates. Most professionals spend more time formatting than analyzing. FlashValue changes that—upload financials, answer context questions, and get clean, defensible reports with AI-powered narratives. No more Excel gymnastics. No more Word document guesswork. Just precise, audit-ready valuations on demand."
/>

<Testimonials
	testimonials={[
		{
			name: "Jennifer Walsh",
			position: "CPA",
			company: "Walsh & Associates",
			quote:
				"FlashValue cut my valuation turnaround from two weeks to two days. The AI-generated narratives are professional and the calculations are bulletproof. My clients are impressed with the speed and quality.",
			image: "/generated/image-a-confident-female-accountant-in-a-profe.webp"
		},
		{
			name: "Michael Torres",
			position: "Forensic Accountant",
			company: "Torres Valuation Services",
			quote:
				"In divorce cases, speed matters. FlashValue lets me deliver defensible valuations quickly while maintaining the rigor courts expect. The transparent methodology documentation is invaluable.",
			image: "/generated/image-a-male-cpa-working-with-financial-spread.webp"
		},
		{
			name: "Lisa Chen",
			position: "Managing Partner",
			company: "Precision Valuation Group",
			quote:
				"We've scaled our practice 3x without adding staff. FlashValue handles the grunt work so our team can focus on complex analysis and client relationships. It's transformed our business model.",
			image: "/generated/image-a-cpa-reviewing-business-valuation-repor.webp"
		}
	]}
/>

<Features
	title="Valuation work that actually scales"
	subtitle="No Excel gymnastics. No template guesswork. No manual formatting that eats billable hours."
	features={[
		{
			title: "AI-powered narrative generation",
			description:
				"Clean, editable reports with professional narratives written by AI trained on thousands of valuation reports."
		},
		{
			title: "Automated financial normalization",
			description:
				"Upload raw financials and FlashValue automatically normalizes data, identifies adjustments, and applies industry standards."
		},
		{
			title: "Comps-based valuation methods",
			description:
				"Built-in comparable company analysis with real-time market data and industry-specific multiples."
		},
		{
			title: "Audit-ready formatting",
			description:
				"Professional reports that meet audit standards with proper documentation, assumptions, and methodology disclosure."
		},
		{
			title: "Defensible methodologies",
			description:
				"Every calculation is transparent and traceable, with clear documentation of assumptions and data sources."
		},
		{
			title: "Minutes, not days",
			description:
				"Complete valuation reports generated in minutes, not the days or weeks traditional methods require."
		}
	]}
/>

<UseCases
	title="Built for professionals who bill by the hour but want to earn by the outcome"
	subtitle="From solo CPAs to boutique valuation firms, FlashValue eliminates the bottlenecks that keep you from scaling your practice."
	useCases={[
		{
			title: "Solo CPA practice scaling",
			description: "Handle 10x more valuation work without hiring additional staff. FlashValue automates the grunt work so you can focus on client relationships and business development while maintaining the same quality standards.",
			image: "/generated/image-a-solo-cpa-working-efficiently-in-a-mode.webp",
			link: {
				href: "/use-cases/solo-practice",
				label: "Learn more"
			}
		},
		{
			title: "Forensic accounting efficiency",
			description: "Generate defensible valuations for divorce proceedings, shareholder disputes, and litigation support. AI-powered narratives and transparent methodologies that stand up to scrutiny in court.",
			image: "/generated/image-a-forensic-accountant-analyzing-financia.webp",
			link: {
				href: "/use-cases/forensic-accounting",
				label: "Learn more"
			}
		},
		{
			title: "Boutique firm differentiation",
			description: "Compete with larger firms by delivering faster turnaround times without compromising quality. Offer clients same-day preliminary valuations and comprehensive reports in days, not weeks.",
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
	title="Your time isn't infinite. Your expertise should scale." 
	subtitle="This isn't just automation. This is professional amplification."
	description="Talk to our founding team to see how FlashValue can eliminate your valuation bottlenecks and help you deliver faster without sacrificing the accuracy your reputation depends on."
	imageSrc="/generated/image-a-professional-accountant-celebrating-su.webp"
	callsToAction={[
		{
			href: "mailto:patrick@flashvalue.com",
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
