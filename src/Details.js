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
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";

// Logos
export const logos = {
	logogradient: logogradient,
	logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
	name: "Muhammad Ridho Heranof",
	tagline: "A passionate Front-end React Developer based in Padang, Indonesia",
	img: profile,
	about: `	As a recent graduate of Computer Engineering from Andalas University, I have completed a 6-month full-stack development program at Coding ID. During the program, I gained expertise in frontend development using ReactJS, as well as programming with JavaScript and .NET Core for web applications. Additionally, I have experience in database management using MySQL. These skills enable me to design and develop comprehensive and effective software solutions. I also demonstrated strong leadership and teamwork abilities through my involvement in various campus organizations. Combining my technical expertise in coding with my leadership and teamwork capabilities, I am well-equipped to contribute to successful software development projects.
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
		Position: "Tracer Study",
		Company: `Andalas University`,
		Location: "Padang",
		Type: "Part Time",
		Duration: "October 2021 - Maret 2022",
	},
	{
		Position: "Data Management",
		Company: `PT Telekomunikasi Indonesia`,
		Location: "Padang",
		Type: "Internship",
		Duration: "Januari 2020 - Maret 2020",
	},
	{
		Position: "IT Consultant Internship",
		Company: `Zephrum Consultant Limited`,
		Location: "London",
		Type: "Internship",
		Duration: "Januari 2022 - Januari 2023",
	},
];

// Enter your Education Details here
export const eduDetails = [
	{
		Position: "Fullstack Developer",
		Company: "Coding ID",
		Location: "Online",
		Type: "Bootcamp",
		Duration: "Jan 2023 - Maret 2023",
	},
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
	html: html,
	css: css,
	js: js,
	react: react,
	redux: redux,
	bootstrap: bootstrap,
	vscode: vscode,
	postman: postman,
	npm: npm,
	git: git,
	github: github,
};

// Enter your Project Details here
export const projectDetails = [
	{
		title: "Counter and Add Features",
		image: projectImage1,
		description: `This website is specifically designed as a practice platform for developers who want to improve their skills in using the useState hook in ReactJS. By providing a range of interactive exercises and examples, it offers a hands-on learning experience that allows developers to gain a deeper understanding of how to effectively utilize useState in their React applications. With step-by-step guidance and real-time feedback, this website empowers developers to strengthen their grasp of state management and build more dynamic and responsive user interfaces using ReactJS.`,
		techstack: "HTML/CSS, JavaScript",
		previewLink: "https://counter-and-add-features.vercel.app/",
		githubLink: "https://github.com/ridhohrnf/Counter-and-Add-movie",
	},
	{
		title: "Portofolio Website",
		image: projectImage2,
		description: `This website serves as a practice platform for utilizing the useState hook in ReactJS and showcases my portfolio as a front-end developer, highlighting my skills, projects, and expertise. It provides an interactive environment for developers to gain hands-on experience with useState and enables potential clients and employers to evaluate my capabilities while also acting as a comprehensive digital resume.`,
		techstack: "HTML/CSS, JavaScript, ReactJS, Tailwind",
		previewLink: "https://portofolio-ridho.vercel.app/",
		githubLink: "https://github.com/ridhohrnf/portofolio",
	},
	{
		title: "Feedback UI",
		image: projectImage3,
		description: `This is a project Reactjs. It allows users to add, update and delete feedback. It uses a mock REST api with json-server.

This project goes over all of the fundamentals of React including...

Components
JSX
Props (proptypes, defaultprops, etc)
State (Component & App Level)
Styling
Handling Events
Lists & Keys
Forms
Context API
HTTP Requests`,
		techstack: "HTML/CSS, JavaScript, ReactJS",
		previewLink: "https://feedback-app-beta-khaki.vercel.app/",
		githubLink: "https://github.com/ridhohrnf/Feedback-app",
	},
	{
		title: "Food Shop",
		image: projectImage4,
		description: `I am currently engaged in the development of a Food Shop Web application. This project utilizes React.js and .NetCore as the core technologies, and it leverages the robust redmango API to enhance its features and capabilities. With this application, users will be able to explore a wide range of food options, place orders, and enjoy a seamless and efficient online shopping experience. Using redmango API That have Features: Redux, Authentication, Payment API, Pagination, Search`,
		techstack: "ReactJS, Javascript, .netCore",
		previewLink: "https://food-shop-liart.vercel.app/",
		githubLink: "https://github.com/ridhohrnf/Food-shop",
	},
];

// Enter your Contact Details here
export const contactDetails = {
	email: "ridhohrnf@gmail.com",
	phone: "+6282110751943",
};
