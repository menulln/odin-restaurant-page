function drawMenu() {
	const body = document.body;
	const main = document.createElement('main');
	const menu = document.createElement('div');
	const title = document.createElement('h2');
	const menuItems = document.createElement('div');

	menu.classList.add('menu-screen');
	title.textContent = 'Menu';
	menuItems.classList.add('menu-items');

	body.appendChild(main);
	main.appendChild(menu);
	menu.appendChild(title);
	menu.appendChild(menuItems);

	function drawMenuItems() {
		for (let i = 0; i < 9; i++) {
			const menuItem = document.createElement('div');
			const itemTitle = document.createElement('h3');
			const itemDesc = document.createElement('p');
			const itemPrice = document.createElement('p');

			itemTitle.textContent = 'Name';
			itemDesc.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Provident beatae reiciendis sequi delectus nihil
									accusantium impedit explicabo porro ratione blanditiis qui
									deserunt voluptatum optio doloribus,
									natus dolore similique quisquam eligendi.`;
			itemPrice.textContent = '$69.99';

			menuItem.classList.add('menu-item');
			menuItem.appendChild(itemTitle);
			menuItem.appendChild(itemDesc);
			menuItem.appendChild(itemPrice);
			menuItems.appendChild(menuItem);
		}
	}

	drawMenuItems();
}

export default function drawMenuScreen() {
	drawMenu();
}
