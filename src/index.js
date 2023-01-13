import { drawHeader, drawContent } from './home';
import drawMenuScreen from './menu';
import drawContactScreen from './contact';

drawHeader();
drawContent();

let activeTab = 'home';

function clearScreen() {
	document.querySelector('main').remove();
}

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

	menu.addEventListener('click', () => {
		if (activeTab !== 'menu') {
			clearScreen();
			drawMenuScreen();
			activeTab = 'menu';
		}
	});

	contact.addEventListener('click', () => {
		if (activeTab !== 'contact') {
			clearScreen();
			drawContactScreen();
			activeTab = 'contact';
		}
	});
}

addListeners();
