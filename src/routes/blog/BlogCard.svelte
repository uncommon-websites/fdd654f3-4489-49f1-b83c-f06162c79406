<script lang="ts">
	// Types
	export type BlogPost = {
		title: string;
		description: string;
		date: string;
		readTime: string;
		category: string;
		image: string;
		url: string;
	};

	// Props
	const { post }: { post: BlogPost } = $props();

	// Format date
	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};
</script>

<article class="group">
	<a href={post.url} class="block">
		<div class="overflow-hidden rounded-lg bg-card hover:bg-card-hover transition-colors duration-200">
			<div class="aspect-video overflow-hidden">
				<img
					src={post.image}
					alt={post.title}
					class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
			
			<div class="p-6">
				<div class="mb-3 flex items-center gap-3 text-caption text-muted-foreground">
					<span class="rounded-full bg-primary-100 px-2 py-1 text-xs font-medium text-primary-700">
						{post.category}
					</span>
					<span>{formatDate(post.date)}</span>
					<span>•</span>
					<span>{post.readTime}</span>
				</div>
				
				<h3 class="text-headline mb-3 group-hover:text-primary-600 transition-colors duration-200">
					{post.title}
				</h3>
				
				<p class="text-body text-muted-foreground line-clamp-3">
					{post.description}
				</p>
				
				<div class="mt-4 flex items-center text-primary-600 text-caption font-medium">
					Read more
					<span class="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
				</div>
			</div>
		</div>
	</a>
</article>