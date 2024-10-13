import React from "react";
import { techStackDetails,toolsDE,database } from "../Details";

function Technologies() {
	const {
		python,javascript,html,css
	} = techStackDetails;
	const {
	tableau,
	looker,
	apacheAirflow,
	kafka,
	awsCloud,
	github,
	vscode,
	gcs,
	bigQuery,
	pyspark
	} = toolsDE;
	const {
		ssis,mongodb,clickhouse,postgre
	}=database
	return (
		<main className="container mx-auto max-width pt-10 pb-20 ">
			<section>
				<h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
					Tech Stack
				</h1>
				<p className="text-content py-2 lg:max-w-3xl">
					Technologies I've been working with recently
				</p>
			</section>
			<section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
				<img src={python} title="python" alt="" />
				<img src={html} title="html" alt="" />
				<img src={css} title="CSS" alt="" />
				<img src={javascript} title="JavaScript" alt="" />
			</section>
			<section>
				<h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
					Tools Data Engineer
				</h1>
			</section>
			<section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
				<img src={vscode} title="Visual Studio Code" alt="" />
				<img src={tableau} title="tableau" alt="tableau" />
				<img src={github} title="Github" alt="Github" />
				<img src={looker} title="looker" alt="looker" />
				<img src={apacheAirflow} title="apacheAirflow" alt="apacheAirflow" />
				<img src={kafka} title="kafka" alt="kafka" />
				<img src={awsCloud} title="aws" alt="awsCloud" />
				<img src={gcs} title="google cloud storage" alt="gcs" />
				<img src={pyspark} title="pyspark" alt="pyspark" />
			</section>
			<section>
				<h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
					Database
				</h1>
			</section>
			<section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
				<img src={ssis} title="ssis" alt="" />
				<img src={postgre} title="postgre" alt="" />
				<img src={mongodb} title="mongodb" alt="" />
				<img src={clickhouse} title="clickhouse" alt="" />
				<img src={bigQuery} title="bigQuery" alt="bigQuery" />
			</section>
		</main>
	);
}

export default Technologies;
