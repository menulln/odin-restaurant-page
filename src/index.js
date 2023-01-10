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

drawHeader();
