const body = document.body;
const header = document.querySelector('.header');
const headerToggle = document.querySelector('.header__nav-toggle');
const toggleIcon = document.querySelector('.header__nav-toggle-icon');


headerToggle.addEventListener('click', () => {
	if (!header.classList.contains('open')) {
		header.classList.add('open');
		body.classList.add('noscroll');
    toggleIcon.setAttribute('src', './images/icon-close.svg');
    toggleIcon.setAttribute('alt', 'Close menu icon');
	} else {
		header.classList.remove('open');
		body.classList.remove('noscroll');
    toggleIcon.setAttribute('src', './images/icon-hamburger.svg');
    toggleIcon.setAttribute('alt', 'Open menu icon');
	}
});
