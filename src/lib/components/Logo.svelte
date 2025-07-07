<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	const props: HTMLAttributes<SVGSVGElement> = $props();
</script>

<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="" {...props}>
  <!-- R -->
  <path d="M8 32V8h8c2.67 0 4.67.67 6 2s2 3.33 2 6c0 1.87-.4 3.4-1.2 4.6-.8 1.2-1.93 2-3.4 2.4L24 32h-4.8l-4.4-8.8H12V32H8zm4-12h3.6c1.07 0 1.87-.27 2.4-.8.53-.53.8-1.33.8-2.4s-.27-1.87-.8-2.4c-.53-.53-1.33-.8-2.4-.8H12v6.4z" fill="currentColor"/>
  
  <!-- E -->
  <path d="M28 32V8h12v4h-8v4h7v4h-7v8h8v4H28z" fill="currentColor"/>
  
  <!-- S -->
  <path d="M44 32V28h8c.53 0 .93-.13 1.2-.4.27-.27.4-.67.4-1.2s-.13-.93-.4-1.2c-.27-.27-.67-.4-1.2-.4h-4c-1.6 0-2.8-.47-3.6-1.4-.8-.93-1.2-2.27-1.2-4s.4-3.07 1.2-4c.8-.93 2-1.4 3.6-1.4h8v4h-8c-.53 0-.93.13-1.2.4-.27.27-.4.67-.4 1.2s.13.93.4 1.2c.27.27.67.4 1.2.4h4c1.6 0 2.8.47 3.6 1.4.8.93 1.2 2.27 1.2 4s-.4 3.07-1.2 4c-.8.93-2 1.4-3.6 1.4H44z" fill="currentColor"/>
  
  <!-- P -->
  <path d="M60 32V8h8c2.67 0 4.67.67 6 2s2 3.33 2 6-.67 4.67-2 6-3.33 2-6 2h-4v8h-4zm4-12h3.6c1.07 0 1.87-.27 2.4-.8.53-.53.8-1.33.8-2.4s-.27-1.87-.8-2.4c-.53-.53-1.33-.8-2.4-.8H64v6.4z" fill="currentColor"/>
  
  <!-- A -->
  <path d="M80 32l-1.2-3.2h-6.4L71.2 32H67l6-24h4.8l6 24H80zm-6.8-7.2h4.4L76 18.4l-2.8 6.4z" fill="currentColor"/>
  
  <!-- W -->
  <path d="M88 32l-2.4-16L83.2 32h-3.2l-2.4-16L75.2 32H71l4-24h4.8l2.4 16 2.4-16h4.8l4 24H88z" fill="currentColor"/>
  
  <!-- N -->
  <path d="M96 32V8h4v16l6-16h4v24h-4V16l-6 16h-4z" fill="currentColor"/>
  
  <!-- Enhanced blockchain recovery icon -->
  <g transform="translate(113, 6)">
    <!-- Recovery network nodes -->
    <circle cx="3" cy="3" r="2" fill="currentColor" opacity="0.9"/>
    <circle cx="3" cy="9" r="1.5" fill="currentColor" opacity="0.7"/>
    <circle cx="3" cy="15" r="2" fill="currentColor" opacity="1"/>
    <circle cx="3" cy="21" r="1.5" fill="currentColor" opacity="0.8"/>
    <circle cx="3" cy="27" r="2.5" fill="currentColor" opacity="1"/>
    
    <!-- Connection lines representing network resilience -->
    <path d="M3 5 L3 7.5" stroke="currentColor" stroke-width="1" opacity="0.6"/>
    <path d="M3 10.5 L3 13" stroke="currentColor" stroke-width="1" opacity="0.8"/>
    <path d="M3 17 L3 19.5" stroke="currentColor" stroke-width="1" opacity="0.7"/>
    <path d="M3 22.5 L3 24.5" stroke="currentColor" stroke-width="1" opacity="0.9"/>
    
    <!-- Shield overlay for security -->
    <path d="M1 15 L3 13 L5 15 L5 19 C5 20.5 4 21.5 3 22 C2 21.5 1 20.5 1 19 Z" 
          fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
  </g>
</svg>

