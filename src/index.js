import { drawHeader, drawContent } from './home';

drawHeader();
drawContent();

let activeTab = 'home';

function addListeners() {
	const home = document.querySelector('.home');
	const menu = document.querySelector('.menu');
	const contact = document.querySelector('.contact');

	home.addEventListener('click', () => {
		if (activeTab !== 'home') {
			clearScreen();
			drawContent();
			activeTab = 'home';
		}
	});
}

addListeners();
