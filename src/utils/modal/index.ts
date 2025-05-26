//close modal when click on navigation item
export const modalClose = () => {
	const closeButton = document.getElementById('close-dialog') as HTMLButtonElement;
	if (closeButton) {
		closeButton.click();
	}
};
