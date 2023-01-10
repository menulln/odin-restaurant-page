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

	function drawDishes() {
		const dishes = document.createElement('div');
		const firstDish = document.createElement('div');
		const secondDish = document.createElement('div');
		const imgFirst = document.createElement('img');
		const imgSecond = document.createElement('img');
		const descriptionFirst = document.createElement('p');
		const descriptionSecond = document.createElement('p');

		dishes.classList.add('dishes-section');
		firstDish.classList.add('01');
		secondDish.classList.add('02');
		imgFirst.src = '../src/img/dishes/01.webp';
		imgSecond.src = '../src/img/dishes/02.png';
		descriptionFirst.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Vel amet doloremque odit facilis odio, mollitia quas voluptates 
										placeat provident laborum aspernatur consequuntur esse dicta eaque 
										corporis nobis. Eveniet, quos laboriosam? 
										Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Vel amet doloremque odit facilis odio, mollitia quas voluptates 
										placeat provident laborum aspernatur consequuntur esse dicta eaque 
										corporis nobis. Eveniet, quos laboriosam.`;
		descriptionSecond.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										 Vel amet doloremque odit facilis odio, mollitia quas voluptates 
									 	 placeat provident laborum aspernatur consequuntur esse dicta eaque 
										 corporis nobis. Eveniet, quos laboriosam. 
										 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										 Vel amet doloremque odit facilis odio, mollitia quas voluptates 
										 placeat provident laborum aspernatur consequuntur esse dicta eaque 
										 corporis nobis. Eveniet, quos laboriosam?`;

		main.appendChild(dishes);
		dishes.appendChild(firstDish);
		dishes.appendChild(secondDish);
		firstDish.appendChild(imgFirst);
		firstDish.appendChild(descriptionFirst);
		secondDish.appendChild(imgSecond);
		secondDish.appendChild(descriptionSecond);
	}

	drawHero();
	drawDishes();
}

drawHeader();
drawContent();
