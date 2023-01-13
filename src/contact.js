function drawContact() {
	const body = document.body;
	const main = document.createElement('main');
	const contactWrapper = document.createElement('div');
	const title = document.createElement('h1');
	const form = document.createElement('form');
	const inputName = document.createElement('input');
	const inputMail = document.createElement('input');
	const inputMessage = document.createElement('textarea');
	const labelName = document.createElement('label');
	const labelMail = document.createElement('label');
	const labelMessage = document.createElement('label');
	const buttonSubmit = document.createElement('button');

	contactWrapper.classList.add('contact-wrapper');

	title.textContent = 'Contact';

	inputName.id = 'name';
	inputMail.id = 'mail';
	inputMessage.id = 'message';

	labelName.htmlFor = 'name';
	labelMail.htmlFor = 'mail';
	labelMessage.htmlFor = 'message';

	labelName.textContent = 'Name';
	labelMail.textContent = 'E-Mail';
	labelMessage.textContent = 'Message';

	buttonSubmit.textContent = 'Submit';

	body.appendChild(main);
	main.appendChild(contactWrapper);
	contactWrapper.appendChild(form);
	form.appendChild(title);
	form.appendChild(labelName);
	form.appendChild(inputName);
	form.appendChild(labelMail);
	form.appendChild(inputMail);
	form.appendChild(labelMessage);
	form.appendChild(inputMessage);
	form.appendChild(buttonSubmit);
}

export default function drawContactScreen() {
	drawContact();
}
