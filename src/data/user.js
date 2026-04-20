import logo from "../assets/images/logo.png";

const INFO = {
	main: {
		title: "Parham Hassanzadeh",
		name: "Parham Hassanzadeh",
		email: "parhamhassanzade@gmail.com",
		phone: "+49 178 284 4205",
		location: "Furtwangen, Germany",
		logo: logo,
	},

	socials: {
		github: "https://github.com/parhamhassanzade",
		linkedin: "https://www.linkedin.com/in/parham-hassanzadeh/",
	},

	homepage: {
		title: "M.Sc. AI & Data Science Student | Data Analytics, ML, and Data Engineering",
		description:
			"M.Sc. AI & Data Science student focused on data analytics, machine learning, and data engineering. I build end-to-end data solutions including ETL pipelines, data warehouses, and predictive models on real-world datasets, and I am currently seeking a Work Student or Thesis opportunity in Data Science or Data Analytics.",
	},

	about: {
		title: "I'm Parham, based in Germany, building practical data and AI systems.",
		description:
			"I am currently pursuing an M.Sc. in Artificial Intelligence & Data Science for Digital Business Management at Furtwangen University and previously earned a B.Sc. in Computer Engineering from Kermanshah University of Technology. My work spans predictive modeling, business intelligence, ETL pipelines, and full-stack product development, with hands-on experience in Python, SQL, Power BI, React.js, Django, and OpenAI-powered systems.",
		education: [
			{
				degree: "M.Sc. Artificial Intelligence & Data Science for Digital Business Management",
				school: "Furtwangen University, Germany",
				period: "2025 - 2027 (expected)",
				details:
					"Relevant coursework: Machine Learning & Applied Statistics, AI & Deep Learning, Business Intelligence for Big Data & MLOps, IT Architectures & Cloud Management, and Business Process Management & Automation.",
			},
			{
				degree: "B.Sc. Computer Engineering",
				school: "Kermanshah University of Technology, Iran",
				period: "2022",
			},
		],
	},

	articles: {
		title: "I write about software engineering, data, and practical machine learning.",
		description:
			"Short notes and lessons from building products, analyzing data, and shipping AI-enabled solutions.",
	},

	projects: [
		{
			title: "EU-PARK Analytics Project",
			description:
				"Built an end-to-end ML pipeline across 130+ Excel files and 2.5 years of data, training XGBoost and Random Forest models that achieved 94% accuracy with +/-1.14 minute error, a 63% improvement over baseline.",
			logo: logo,
			linkText: "View Project",
			link: "https://github.com/parhamhassanzade/eu_park",
		},
		{
			title: "Business Intelligence & Data Warehouse",
			description:
				"Designed a full BI pipeline from CSV to staging, data warehouse, and data mart using Python, Pandas, MySQL, and Power BI on an e-commerce dataset with 125K+ orders, 181K items, and 29K products.",
			logo: logo,
			linkText: "View Project",
			link: "https://github.com/parhamhassanzade/BI-project",
		},
		{
			title: "Bitcoin Volatility Analysis (GARCH)",
			description:
				"Modeled BTC-USD price volatility with GARCH(1,1), building a data pipeline with yfinance, log-return calculation, and statistical analysis to study volatility clustering and persistence in crypto markets.",
			logo: logo,
			linkText: "View Project",
			link: "https://github.com/parhamhassanzade/Bitcoin-Volatility",
		},
		{
			title: "AI Voice Agent",
			description:
				"Built a prototype insurance voice assistant using OpenAI Whisper for speech-to-text, LLM-based intent classification, text-to-speech, session memory, and action routing for multi-step customer workflows.",
			logo: logo,
			linkText: "View Project",
			link: "https://github.com/parhamhassanzade/voice-agent",
		},
		{
			title: "V2Ray Proxy Performance Analysis",
			description:
				"Analyzed the performance of V2Ray proxies under various network conditions, identifying bottlenecks and optimizing configurations for improved throughput and reliability.",
			logo: logo,
			linkText: "GitHub Profile",
			link: "https://github.com/parhamhassanzade",
		},
		{
			title: "Dynamic panel ",
			description:
				"Built a dynamic panel for real-time data visualization and monitoring.",
			linkText: "GitHub Profile",
			logo: logo,

			link: "https://github.com/parhamhassanzade",
		},
	],
};

export default INFO;
