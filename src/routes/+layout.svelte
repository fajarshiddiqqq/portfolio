<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<title>CV | Muhammad Fajar Ash Shiddiq</title>

	<!-- Meta Tags for SEO -->
	<meta
		name="description"
		content="Muhammad Fajar Ash Shiddiq's CV - A professional portfolio showcasing skills, experience, and projects."
	/>
	<meta
		name="keywords"
		content="Muhammad Fajar Ash Shiddiq, CV, resume, portfolio, developer, data engineer, backend, SILVANUS Project"
	/>
	<meta name="author" content="Muhammad Fajar Ash Shiddiq" />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph (For Social Media) -->
	<meta property="og:title" content="CV | Muhammad Fajar Ash Shiddiq" />
	<meta
		property="og:description"
		content="A professional portfolio showcasing skills, experience, and projects."
	/>
	<meta property="og:image" content="https://fajarshiddiqqq.my.id/profile-image.jpg" />
	<meta property="og:url" content="https://fajarshiddiqqq.my.id" />
	<meta property="og:type" content="website" />

	<!-- Twitter Card (For better Twitter preview) -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="CV | Muhammad Fajar Ash Shiddiq" />
	<meta
		name="twitter:description"
		content="A professional portfolio showcasing skills, experience, and projects."
	/>
	<meta name="twitter:image" content="https://fajarshiddiqqq.my.id/profile-image.jpg" />

	<!-- Structured Data (Schema.org for better SEO) -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Muhammad Fajar Ash Shiddiq",
			"url": "https://fajarshiddiqqq.my.id",
			"image": "https://fajarshiddiqqq.my.id/profile-image.jpg",
			"jobTitle": "Backend Developer | Data Engineer",
			"worksFor": [
				{
					"@type": "Organization",
					"name": "Venaka Treleaf Gbr",
					"url": "https://venaka.ee/"
				},
				{
					"@type": "Organization",
					"name": "SILVANUS Project",
					"url": "https://silvanus-project.eu/"
				}
			],
			"sameAs": [
				"https://github.com/fajarshiddiqqq",
				"https://linkedin.com/in/fajarshiddiqqq",
				"https://twitter.com/fajarshiddiqqq"
			]
		}
	</script>
</svelte:head>

<main>
	<slot />
</main>
