import s from './Footer.module.scss';

const Footer = ({ className }) => {
	return (
		<footer className={[ s.footer, className ].join(' ')}>
			Made with 💗 by <a href="http://portfolio-amartya0.vercel.app/">Amartya Jash</a>
			<br />
			I'll see you in the Dark Side of the Moon 🌈
		</footer>
	);
};

export default Footer;
