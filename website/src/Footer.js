import './styles/Footer.scss';

import { ReactComponent as Waves } from './assets/waves.svg';
import { Obfuscated } from './obfuscate.js';
import resolveRoute from './resolveRoute.js';
import { ThemeLink } from './ThemeElements.js';

export default function Footer() {
	return (
		<footer>
			<Waves />
			<div className="background">
				<div className="content">
					<div className="shift-right" />
					<ThemeLink to={resolveRoute('/', 'faq')}>Credits</ThemeLink>
					<span>
						&copy; <Obfuscated>Void Proxy</Obfuscated>{' '}
						{new Date().getUTCFullYear()}
					</span>
				</div>
			</div>
		</footer>
	);
}
