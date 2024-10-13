// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import tableau from "./assets/techstack/tableau.png";
import looker from "./assets/techstack/looker.png";
import airflow from "./assets/techstack/airflow.png";
import kafka from "./assets/techstack/kafka.png";
import awsCloud from "./assets/techstack/awsCloud.png";
import gcs from "./assets/techstack/gcs.png";
import bq from "./assets/techstack/bq.png";
import pyspark from "./assets/techstack/pyspark.png";
import ssis from "./assets/techstack/ssis.png";
import mongodb from "./assets/techstack/postgre.png";
import clickhouse from "./assets/techstack/clickhouse.png";
import python from "./assets/techstack/python.png";
import postgre from "./assets/techstack/postgre.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";

// Logos
export const logos = {
	logogradient: logogradient,
	logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
	name: "Muhammad Ridho Heranof",
	tagline: "A passionate Data Engineer based in Jakarta Selatan, Indonesia",
	img: profile,
	about: `With one year of hands-on experience, including intensive training at a Career Bootcamp and a current role as a Data Engineer at PT Neural Technologies Indonesia, I bring a versatile skill set in data engineering and full-stack development. In my current position, I optimize PostgreSQL databases for maximum performance, and design ETL processes for various data types, including images, Excel files, and data extracted from APIs and data extracted via SFTP. Proficient in Python, SQL, Spark, Data Warehousing, and Cloud Computing, I've designed end-to-end data pipelines using tools like Airflow, Google Cloud Storage, Dataflow, BigQuery, and Kafka. My expertise includes configuring databases, implementing security settings, and using Apache Airflow for ETL workflows. Collaborating with teams, I align databases with business needs. Alongside a strong academic background in Computer Engineering, I'm proficient in ReactJS, .NetCore, Tableau, Looker, Metabase, Apache Spark, AWS Cloud, Google Cloud Platform, and Kafka. I am eager to contribute my skills to projects requiring a robust blend of data engineering and full-stack development expertise.
`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
	linkdein: "https://www.linkedin.com/in/ridhoheranof",
	github: "https://www.github.com/ridhohrnf",
	instagram: "https://www.instagram.com/ridhoheranof",
};

// Enter your Work Experience here
export const workDetails = [
	{
		Position: "Database Engineer",
		Company: `PT Neural Technologies Indonesia`,
		Location: "Jakarta Selatan",
		Type: "Contract",
		Duration: "Desember 2023 - Present",
	},
	{
		Position: "Data Engineer",
		Company: `PT Pusat Inovasi Nusantara`,
		Location: "Jakarta Selatan",
		Type: "Project Based",
		Duration: "April 2023 – November 2023",
	},
	{
		Position: "Data Engineer Internship",
		Company: `Zephrum Consultant Limited`,
		Location: "London",
		Type: "Internship",
		Duration: "Januari 2023 - Maret 2023",
	},
];

// Enter your Education Details here
export const eduDetails = [
	{
		Position: "Bachelor in Computer Engineering",
		Company: `Andalas University`,
		Location: "Padang",
		Type: "Graduate",
		Duration: "Aug 2017 - Februari 2023",
	},
];

// Tech Stack and Tools
export const techStackDetails = {
	python: python,
	javascript: js,
	html: html,
	css: css,
};

export const toolsDE= {
	tableau:tableau,
	looker:looker,
	apacheAirflow:airflow,
	kafka:kafka,
	awsCloud:awsCloud,
	github: github,
	vscode: vscode,
	gcs:gcs,
	bigQuery:bq,
	pyspark:pyspark
}
export const database={
	ssis:ssis,
	postgre:postgre,
	mongodb:mongodb,
	clickhouse:clickhouse
}

// Enter your Project Details here
export const projectDetails = [
	{
		title: "Final End to End Project Fraud Analysis",
		// image: projectImage1,
		description: `analysis of bank fraud data with the aim of evaluating the fraud detection algorithms developed by previous developers. Additionally, I will analyze patterns of fraudulent transactions that commonly occur from the fraud transaction data over a one-month period. This analysis will generate insights regarding which types of fraudulent transactions are most frequent, the nature of these transactions, and the amounts involved in fraud cases.`,
		techstack: "airflow, google cloud storage, google big query,pyspark, looker",
		previewLink: "https://drive.google.com/file/d/1QK3py5AGcqJUjo_JWz8wX4JglrBdK6E1/view?usp=sharing",
		githubLink:"https://github.com/ridhohrnf/finalproject-df10",
	},
	{
		title: "ETL Project",
		// image: projectImage2,
		description: `This is a repository for an ETL project that utilizes Apache Airflow and PostgreSQL. The project includes the setup of a Directed Acyclic Graph (DAG) to fully ingest data, perform daily updates, and backdate data. It also models the data into a database schema and creates a data mart. One of the key features is the automation of the ETL process, enabling structured data processing from various sources. The sales data is processed and stored in a PostgreSQL schema for further analysis. The project uses Docker to provide a consistent development environment with Docker and Docker Compose, ensuring that operations are idempotent and do not result in unintended data duplication.`,
		techstack: "airflow,postgres",
		previewLink:"https://github.com/ridhohrnf/Project-Airflow",
		githubLink: "https://github.com/ridhohrnf/Project-Airflow",
	},
	{
		title: "Kafka To BQ",
		// image: projectImage3,
		description: `Kafka To BQ`,
		techstack: "Kafka",
		previewLink:"https://github.com/ridhohrnf/kafka_to_bq",
		githubLink: "https://github.com/ridhohrnf/kafka_to_bq",
	},
];

// Enter your Contact Details here
export const contactDetails = {
	email: "ridhohrnf@gmail.com",
	phone: "+6282110751943",
};
