<script>
	let { data } = $props();
</script>

<div
	class="container mx-auto max-w-4xl bg-white px-8 py-18 shadow-lg inset-shadow-2xs sm:px-12"
	id="cv-container"
>
	<div class="mb-6 space-y-1">
		<h1 class="text-[38px] font-bold uppercase sm:text-[40px]">{data.name}</h1>
		{#if data.jobs.length > 0}
			<ul class="flex flex-col gap-1 sm:flex-row sm:gap-2">
				{#each data.jobs as job, i}
					<li
						class="text-base tracking-widest uppercase after:content-[','] last:after:content-none sm:text-lg"
					>
						{job}
					</li>
				{/each}
			</ul>
		{/if}
	</div>

	<div class="mb-6 space-y-2">
		<h2 class="text-2xl font-bold uppercase">Summary</h2>
		<p class="text-justify text-[15px] text-slate-600">{data.summary}</p>
	</div>

	<div class="mb-8 space-y-3">
		<h2 class="text-2xl font-bold uppercase">Skills</h2>
		<ul class="flex flex-wrap gap-2">
			{#each Object.values(data.skills).flat() as skill}
				<li class="rounded-full bg-gray-200 px-3 py-1 text-sm">{skill}</li>
			{/each}
		</ul>
	</div>

	<div class="mb-8 space-y-3">
		<h2 class="text-2xl font-bold uppercase">Work Experience</h2>
		<div>
			{#each data.experiences as experience, i}
				<div class="mb-4">
					<div class="mb-2 flex flex-col sm:mb-0 sm:flex-row sm:items-center sm:gap-2">
						<h3 class="text-lg font-semibold text-nowrap">{experience.title}</h3>
						<h3 class="text-sm text-nowrap text-slate-600 italic">
							( {experience.period.start} - {experience.period.end} )
						</h3>
					</div>
					<h4 class="mb-2 text-sm">{experience.company} . {experience.type}</h4>
					<p class="text-justify text-[15px] text-slate-600">{experience.description}</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="mb-8 space-y-2">
		<h2 class="text-2xl font-bold uppercase">Education</h2>
		<div>
			{#each data.educations as education, i}
				<div class="mb-4">
					<div class="flex flex-col items-start gap-0 sm:flex-row sm:items-center sm:gap-2 mb-2 sm:mb-0">
						<h3 class="text-lg font-semibold">{education.degree}</h3>
						<h3 class="text-sm text-slate-600 italic">
							( {education.period.start} - {education.period.end} )
						</h3>
					</div>
					<h4 class="mb-1 text-sm">{education.school} . {education.faculty}</h4>
					<div class="mb-1 flex items-center">
						<p class="text-sm">GPA: {education.grade} / 4.00</p>
						<a class="ml-2 text-sm text-blue-500" href="/certificate.pdf" target="_blank">[file]</a>
					</div>
					<h3 class="mb-1 text-sm">Highlights:</h3>
					{#each education.activities as activity, i}
						<ul class="ml-8 list-disc text-slate-600">
							<li class="mb-1 text-sm">{activity}</li>
						</ul>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<div class="mb-8 space-y-2">
		<h2 class="text-2xl font-bold uppercase">Contact Information</h2>
		<ul class="flex flex-col gap-1 text-sm">
			<li class="flex items-center gap-2">
				<strong>Email:</strong>
				{data.email}
			</li>
			<li class="flex items-center gap-2">
				<strong>Phone:</strong>
				{data.phone}
			</li>

			<li class="flex items-center gap-2">
				<strong>Socials:</strong>
				<ul class="flex gap-3">
					{#each Object.entries(data.social) as [platform, url]}
						<li>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-500 capitalize"
							>
								{platform}
							</a>
						</li>
					{/each}
				</ul>
			</li>
		</ul>
	</div>
</div>
