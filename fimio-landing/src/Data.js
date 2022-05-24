export const howToApply = {
	text: [ <>
		<p>Nothing in life is perfect, including this job description. It is not expected that any single candidate would have expertise across all the areas (in fact, one of our team members never even worked on blockchains before joining us!). You may be an excellent fit even if you don&rsquo;t meet all these requirements.&nbsp;</p>
		<br/>
		<p>We welcome all qualified persons to apply regardless of race, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status. Compensation will be competitive and commensurate with experience.&nbsp;</p>
	</>
	]
}

const aboutText= (role) => ([<>
	<p>We are a small team working on scaling human coordination. Our mission is to bring trustlessness to the application layer in Web3. We're looking for a {role} that will join us as we architect and design the core system from the ground up.</p>
	<br/>
	<p>
		We are ambitious. We believe our technology will fundamentally change Web3. And we have the technical and research chops to back it up. Our Founder and CEO, Omoju Miller, was the Technical Advisor to the CEO at GitHub and has a world class understanding of technical online communities.
	</p>
	<br/>
	<p>
		As our Founding {role}, you will be a key part of our success (and fun) of building the reputation mechanism that will unleash the true power of human coordination technology at a planetary scale.
	</p>
	<br/>
	<p>
		This is a full-time role based out of Oakland/San Francisco. You will only be asked to come to the office when the CEO is in (typically be 2-3 days per week).
	</p>
</>
]);

export const job1 = {
	background_image_id: "background_image_1",
	text_wrapper_id: "text_wrapper_1",
	job_id: '1',
	title: "Founding Data Engineer",
	first_subtitle: "Full-Time",
	second_subtitle: "Remote",
	light_background: false,
	about: aboutText('Data Engineer'),
	youWill: [
		<ul>
			<li> Design, build, and maintain infrastructure and data pipeline capable of ingesting large amounts of data from layer one blockchains
			</li>
			<li> Write clear, concise, tutorial type developer documentation
			</li>
			<li> Own products end to end</li>
		</ul>
	],
	youHave: [
		<ul>
			<li>
				<p>Passion for and extremely bullish on Web3</p>
			</li>
			<li>
				<p>Strong technical background, and 3+ years of proficiency in building, operating, and maintaining resilient, and scalable distributed systems</p>
			</li>
			<li>
				<p>Track record of shipping and maintaining machine learning systems in production environments&nbsp;</p>
			</li>
			<li>
				<p>Experience with Kafka, and other stream processing technologies</p>
			</li>
			<li>
				<p>Experience working with systems like Presto, Airflow, and Spark</p>
			</li>
			<li>
				<p>3+ years of experience writing code in Python, JavaScript, Go or Rust</p>
			</li>
			<li>
				<p>Experience with data on EVM-compatible blockchains is a plus but not required</p>
			</li>
			<li>
				<p>An on-chain resume like a degenscore or active governance participation</p>
			</li>
			<li>
				<p>Have strong written communication skills</p>
			</li>
		</ul>
	],
	howToApply: howToApply.text,
	applyForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeyI-eXHf9KvilfY9mi65AumnEkNfS287ckfWKXth8OXdHXLg/viewform?usp=sf_link'
};

export const job2 = {
	background_image_id: "background_image_3",
	text_wrapper_id: "text_wrapper_2",
	job_id: '2',
	title: "Founding Software Engineer (API)",
	first_subtitle: "Full-Time",
	second_subtitle: "Remote",
	light_background: false,
	about: aboutText('Software Engineer'),
	youWill: [
		<ul>
			<li>
				<p>Design, build, and rapidly iterate, experiment and launch resilient products</p>
			</li>
			<li>
				<p>Build a great developer experience for engineers to link with our core offering</p>
			</li>
			<li>
				<p>Own products end to end - including API, backend, testing and so on</p>
			</li>
			<li>
				<p>Write clear, concise, tutorial type developer documentation</p>
			</li>
		</ul>
	],
	youHave: [
		<ul>
			<li>
				<p>Passion for and extreme bullishness on Web3</p>
			</li>
			<li>
				<p>Strong technical skills, and 3+ years of proficiency in building, operating, and maintaining resilient, and scalable production systems</p>
			</li>
			<li>
				<p>3+ years of experience writing code in Python, JavaScript, Go or Rust</p>
			</li>
			<li>
				<p>Strong written communication skills</p>
			</li>
			<li>
				<p>Experience with EVM-compatible blockchains is a plus but not required</p>
			</li>
			<li>
				<p>An on-chain resume like a degenscore or active governance participation</p>
			</li>
		</ul>
	],
	howToApply: howToApply.text,
	applyForm: "https://docs.google.com/forms/d/e/1FAIpQLSfnrwdmFC6KWz5-qkrHw5432Rw4zv5tXFYcdjJm0QPAD3vfYw/viewform"
};

export const job3 = {
	background_image_id: "background_image_4",
	text_wrapper_id: "text_wrapper_3",
	job_id: '3',
	title: "Backend Engineer",
	first_subtitle: "Full-Time",
	second_subtitle: "Remote",
	light_background: true,
	about: `We’re inviting experienced backend engineers to join the TipTop founding team with backgrounds in engineering, data science & product. Together we will be working on systems at the intersection of fiat and crypto. Are you a curious thinker who likes to solve complex challenges in a rewarding environment where your contributions are valued and have a direct impact?`,
	youWill: [
		<ul>
			<li>Work on complex challenges building software systems for products and verticals that don’t yet exist</li>
			<li>Build scalable core services that power the platform and both internal and external endpoints</li>
			<li>Partner and collaborate closely with product designers, blockchain, infrastructure, and machine learning teams</li>
			<li>Contribute to the development of consumer facing experimentation & risk platforms</li>
			<li>Have the opportunity to build and lead a team</li>
		</ul>
	],
	youHave: [
		<ul>
			<li>5+ years of experience as a software engineer architecting, building, launching, and maintaining end-to-end services from whiteboard to production</li>
			<li>Demonstrated ability turning business and product ideas into engineering solutions. You can go from zero to one</li>
			<li>Strong CS fundamentals and programming experience in Go and Python</li>
			<li>A desire to experiment, test assumptions, and challenge hypotheses rapidly</li>
			<li>The ability to see complex problems as solvable challenges</li>
		</ul>
	],
	howToApply: `Send us an email with a copy of your resume or LinkedIn, your GitHub, and any projects you think we should see`,
};

export const jobs = [
	job1,
	job2,
]
