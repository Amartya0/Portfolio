import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import s from '../styles/404.module.scss';
import Link from 'next/link';

export default function PageNotFound() {
	return (
		<div className={s.container}>
			<Head>
				<title>Oops! Page Not Found | Amartya Jash</title>
				<meta name="description" content="Hey I am Amartya Jash." />
				<link rel="icon" href="/images/logo.jpg" />
			</Head>
			<div className={s.main}>
				<h1 className={s.h404}>
					4<span>
						<div />
						<div className={s.sat}>
							<span>
								<img src="/images/satellite.png" />
							</span>
						</div>
						<img src="/images/cartoon-2026643_960_720.webp" alt="Moon representing 0" />
					</span>4
				</h1>
				<h4>You have reached the dark side of the moon, don't worry, you can still go back...</h4>
				<Link href="/">Homepage</Link>
			</div>
			<footer className={s.footer}>
				Made with 💗 by <a href="http://portfolio-amartya0.vercel.app/">Amartya Jash</a>
			</footer>
		</div>
	);
}
