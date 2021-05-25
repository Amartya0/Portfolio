import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import styles from '../styles/Home.module.scss';
import Gravatar from 'react-gravatar';
import Social48pxGlyph1_logoFbSimple from '../components/icons/social-48px-glyph-1_logo-fb-simple';
import Social48pxGlyph1_logoInstagram from '../components/icons/social-48px-glyph-1_logo-instagram';
import Social48pxGlyph1_logoGithub from '../components/icons/social-48px-glyph-1_logo-github';
import Social48pxGlyph1_logoLinkedIn from '../components/icons/social-48px-glyph-1_logo-linkedin';
import Social48pxGlyph1_logoTwitter from '../components/icons/social-48px-glyph-1_logo-twitter';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Amartya Jash 😎 | Creative Dev</title>
				<meta name="description" content="Hey I am Amartya Jash." />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<Navbar />
			<main className={styles.main}>
				<section className={styles.info}>
					<div className={styles.textDiv}>
						<div className={styles.text}>
							<h1>
								Hey I’m&nbsp;<br />
								<span>Amartya Jash</span>
							</h1>
							<h4>Front-End Developer</h4>
							<p>
								Don’t know much about me but mis amigos does. I’m a student, busy exploring the madness
								of life. A moviebuff, a tactical gamer. Looking to meet new people and get ideas.
							</p>
							<ul>
								<li>
									<a href="https://www.facebook.com/amartya.jash.5/" target="_blank">
										<Social48pxGlyph1_logoFbSimple />
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/amartyajash/" target="_blank">
										<Social48pxGlyph1_logoInstagram />
									</a>
								</li>
								<li>
									<a href="https://github.com/Amartya0" target="_blank">
										<Social48pxGlyph1_logoGithub />
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/amartya-jash-1bb9ab191/" target="_blank">
										<Social48pxGlyph1_logoLinkedIn />
									</a>
								</li>
								<li>
									<a href="https://twitter.com/AmartyaJash" target="_blank">
										<Social48pxGlyph1_logoTwitter />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.imgDiv}>
						<div className={styles.image}>
							<Gravatar email="amartya0009@gmail.com" size={256} />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
