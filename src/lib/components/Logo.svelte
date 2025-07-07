<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	const props: HTMLAttributes<SVGSVGElement> = $props();
</script>

<svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="" {...props}>
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
  
  <!-- Enhanced blockchain recovery network icon -->
  <g transform="translate(115, 4)">
    <!-- Central recovery hub -->
    <circle cx="20" cy="16" r="3" fill="currentColor" opacity="1"/>
    
    <!-- Distributed network nodes -->
    <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.8"/>
    <circle cx="32" cy="8" r="2" fill="currentColor" opacity="0.8"/>
    <circle cx="8" cy="24" r="2" fill="currentColor" opacity="0.8"/>
    <circle cx="32" cy="24" r="2" fill="currentColor" opacity="0.8"/>
    
    <!-- Verification nodes -->
    <circle cx="14" cy="4" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="26" cy="4" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="14" cy="28" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="26" cy="28" r="1.5" fill="currentColor" opacity="0.6"/>
    
    <!-- Network connections -->
    <path d="M17 16 L10 10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <path d="M23 16 L30 10" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <path d="M17 16 L10 22" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <path d="M23 16 L30 22" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    
    <!-- Blockchain verification lines -->
    <path d="M14 6 L20 13" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <path d="M26 6 L20 13" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <path d="M14 26 L20 19" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    <path d="M26 26 L20 19" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    
    <!-- Recovery shield -->
    <path d="M18 12 L20 10 L22 12 L22 18 C22 19.5 21 20.5 20 21 C19 20.5 18 19.5 18 18 Z" 
          fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.6"/>
  </g>
</svg>

