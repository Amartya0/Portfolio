import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import s from '../styles/UnderConstruction.module.scss';
import Head from 'next/head';

export default function Works() {
	return (
		<div className={s.main}>
			<Head>
				<title>Oops! Page Not Found | Aniket Datta</title>
				<meta name="description" content="Hey I am Amartya Jash." />
				<link rel="icon" href="/images/logo.jpg" />
			</Head>
			<div className={s.inner}>
				<header className={s.header}>
					<Navbar />
				</header>
				<h1 className={s.highlight}>
					Page In The&nbsp;<span>Making!</span>
				</h1>
				<Footer className={s.footer} />
			</div>
		</div>
	);
}
