import {modalClose} from '../modal';

//open contact drawer when click on contact me
export const contactDrawer = () => {
	modalClose();
	const contactButton = document.getElementById('contact-drawer') as HTMLButtonElement;
	if (contactButton) {
		contactButton.click();
	}
};
