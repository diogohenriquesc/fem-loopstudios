const header = document.querySelector('.header');
const headerToggle = document.querySelector('.header__nav-toggle');
const toggleIcon = document.querySelector('.header__nav-toggle-icon');

headerToggle.addEventListener('click', () => {
	if (!header.classList.contains('open')) {
		header.classList.add('open');
    toggleIcon.setAttribute('src', './images/icon-close.svg');
	} else {
		header.classList.remove('open');
    toggleIcon.setAttribute('src', './images/icon-hamburger.svg');
	}
});
