function drawHeader() {
	const body = document.body;
	const header = document.createElement('header');
	const nav = document.createElement('nav');
	const logo = document.createElement('a');
	const ul = document.createElement('ul');
	const liHome = document.createElement('li');
	const liMenu = document.createElement('li');
	const liContact = document.createElement('li');
	const home = document.createElement('a');
	const menu = document.createElement('a');
	const contact = document.createElement('a');

	logo.classList.add('logo');
	logo.textContent = 'plantBased.js';
	home.textContent = 'Home';
	menu.textContent = 'Menu';
	contact.textContent = 'Contact';

	body.appendChild(header);
	header.appendChild(nav);
	nav.appendChild(logo);
	nav.appendChild(ul);
	ul.appendChild(liHome);
	ul.appendChild(liMenu);
	ul.appendChild(liContact);
	liHome.appendChild(home);
	liMenu.appendChild(menu);
	liContact.appendChild(contact);
}

function drawContent() {
	const body = document.body;
	const main = document.createElement('main');

	function drawHero() {
		const hero = document.createElement('div');
		const img = document.createElement('img');
		const title = document.createElement('h1');
		const p = document.createElement('p');

		hero.classList.add('hero');
		img.src = '../src/img/header.jpg';
		title.classList.add('title');
		title.textContent = 'Welcome to our restaurant!';
		p.textContent =
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo porro ipsum minus.';

		body.appendChild(main);
		main.appendChild(hero);
		hero.appendChild(img);
		hero.appendChild(title);
		hero.appendChild(p);
	}

	drawHero();
}

drawHeader();
drawContent();
