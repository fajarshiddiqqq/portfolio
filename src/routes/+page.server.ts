export function load() {
	return {
		name: 'Muhammad Fajar Ash Shiddiq',
		jobs: ['backend developer', 'data engineer'],
		birthdate: '2003-07-15',
		email: 'fajarshiddiqqq@gmail.com',
		phone: '+6285640840796',
		social: {
			github: 'https://github.com/fajarshiddiqqq',
			linkedin: 'https://linkedin.com/in/fajarshiddiqqq',
			instagram: 'https://instagram.com/fajarshiddiqqq',
			twitter: 'https://twitter.com/fajarshiddiqqq'
		},
		address: {
			province: 'Special Region of Yogyakarta',
			country: 'Indonesia'
		},
		summary:
			'Computer science graduate. Backend and data engineer with expertise in designing and implementing scalable solutions using Python, SQL, and cloud platforms like AWS. Skilled in GIS, Geospatial data processing, automation, and creating data-driven applications. Currently contributing to impactful projects as a Freelance Backend Developer, blending technical proficiency with a commitment to continuous learning. Passionate about leveraging technology to solve complex problems and drive innovation across industries.',
		skills: {
			programming: ['Python', 'JavaScript'],
			database: ['MySQL', 'PostgreSQL'],
			cloud: ['AWS'],
			tools: ['Git', 'Docker', 'Postman'],
			web: ['HTML', 'CSS', 'Svelte', 'Tailwind', 'Flask'],
			others: ['GIS', 'Airflow', 'Web Hosting']
		},
		experiences: [
			{
				title: 'Backend Developer',
				company: 'SILVANUS Project',
				location: 'Hybrid (Yogyakarta)',
				period: { start: 'July 2023', end: 'Present' },
				type: 'Freelance',
				description:
					'Designed and implemented a MySQL-based spatial database to manage geospatial data efficiently. Automated data ingestion workflows using Python and Apache Airflow, streamlining data retrieval and processing. Developed and optimized RESTful APIs with Flask and SQLAlchemy to ensure seamless integration between backend and frontend systems. Improved data storage and accessibility by implementing backend automation pipelines.'
			},
			{
				title: 'Junior AI Researcher',
				company: 'Venaka Treleaf GbR',
				location: 'Remote',
				period: { start: 'September 2024', end: 'February 2025' },
				type: 'Internship',
				description:
					'Processed large-scale geospatial datasets and converted them into GeoJSON format for spatial analysis. Designed and implemented a PostgreSQL/PostGIS database to store and query geospatial data efficiently. Integrated regional GIS data from GADM to enhance spatial computations and analysis. Developed complex PostGIS queries for spatial operations such as intersections and aggregations. Built interactive geospatial visualizations using Folium to support data-driven insights. Created Flask-based RESTful APIs for efficient data retrieval and integration.'
			}
		],
		educations: [
			{
				degree: 'Bachelor of Informatics',
				faculty: 'Computer Science Faculty',
				school: 'The University of AMIKOM Yogyakarta',
				location: 'Yogyakarta',
				period: { start: 'January 2021', end: 'February 2025' },
				grade: '3.99',
				activities: [
					'Represented Indonesia at the APICTA Competition in Brunei.',
                    'Won 3rd place in a national AI Datathon (KORIKA & BMKG) for environmental data analysis.',
                    'Published a SINTA-2 research paper awarded Best Paper Runner-Up.',
					'IEEE Student Branch R&D Chair: Secured funding opportunities, supporting international conferences (Indonesia & Japan) and revived the IEEE student branch website.',
					'Data Structures Lab Assistant: Assisted in C++ programming courses, provided technical support, substituted for lecturers, and evaluated student assignments.',
                    'University Mobility Program in Thailand: Engaged in a three-week international academic program, enhancing cross-cultural communication and collaboration skills.'
				]
			}
		]
	};
}
