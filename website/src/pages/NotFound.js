import resolveRoute from '../resolveRoute.js';
import { ThemeLink } from '../ThemeElements.js';

export default function NotFound(props) {
	return (
		<main>
			<h1>The page you are looking for is not available.</h1>
			<hr />
			<p>
				If you typed in the URL yourself, please double-check the spelling.
				<br />
				
			</p>
		</main>
	);
}
