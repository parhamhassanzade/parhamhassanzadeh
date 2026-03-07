import logo from "../assets/images/logo.png";

const INFO = {
	main: {
		title: "Parham Hassanzadeh",
		name: "Parham Hassanzadeh",
		email: "parhamhassanzade@gmail.com",
		phone: "+491782844205",
		location: "Furtwangen, Germany",
		logo: logo,
	},

	socials: {
		github: "https://github.com/parhamhassanzade",
		linkedin: "https://www.linkedin.com/in/parham-hassanzadeh/",
	},

	homepage: {
		title: "M.Sc. AI & Data Science Student | Mid-level Web Developer",
		description:
			"Current M.Sc. Artificial Intelligence & Data Science student with a strong foundation in machine learning, deep learning, and software development. I build practical products with React/Next.js, Django, and data-driven workflows that improve business performance.",
	},

	about: {
		title: "I'm Parham, based in Germany, building practical AI and web products.",
		description:
			"I combine full-stack web development experience with graduate-level AI and data science training. My recent work includes building fintech and management platforms, training machine learning models for forecasting and marketing, and implementing BI/data warehouse pipelines on large datasets. I enjoy turning complex data and business needs into clear, scalable solutions.",
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
				"Built an XGBoost model for theme park wait-time prediction with +/-1.14 minute error and 94% accuracy, using a pipeline over 130+ Excel files and 2.5 years of operational data.",
			logo: logo,
			linkText: "GitHub Profile",
			link: "https://github.com/parhamhassanzade",
		},
		{
			title: "UK Housing BI & Data Warehouse",
			description:
				"Implemented a full BI architecture (PSA, DWH, Data Mart) and star schema for 22M+ housing records, including ETL pipelines, data cleansing, and dimensional modeling in MySQL.",
			logo: logo,
			linkText: "GitHub Profile",
			link: "https://github.com/parhamhassanzade",
		},
		{
			title: "Bitcoin Volatility Analysis (GARCH)",
			description:
				"Analyzed BTC-USD volatility with GARCH(1,1), built data pipelines, and interpreted persistence and shock sensitivity to understand crypto market risk behavior.",
			logo: logo,
			linkText: "GitHub Profile",
			link: "https://github.com/parhamhassanzade",
		},
	],
};

export default INFO;
