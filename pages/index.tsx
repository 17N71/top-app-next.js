import Head from "next/head";
import React from "react";
import home from "./../styles/home.module.scss";
const Home: React.FC = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Главная страница</title>
				<meta name="title" content="Главная страница" />
				<meta name="og:title" content="Главная страница" />
			</Head>
			<section className={home.home}>
				<div className={home.homeSection}>World</div>
			</section>
		</>
	);
};
export default Home;
