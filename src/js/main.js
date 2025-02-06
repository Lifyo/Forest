const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__link');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	nav.classList.toggle('nav--active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});
};
navBtn.addEventListener('click', handleNav);

document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll('.section');
	const navLinks = document.querySelectorAll('.nav-desktop__link');

	function onScroll() {
		let scrollPos =
			window.scrollY ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;

		sections.forEach((section, index) => {
			const sectionTop = section.offsetTop - 200; // Offset for the fixed nav height
			const sectionHeight = section.clientHeight;

			if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
				navLinks.forEach((link) => link.classList.remove('active'));
				navLinks[index].classList.add('active');
			}
		});
	}

	window.addEventListener('scroll', onScroll);
	onScroll(); // Call onScroll to set the initial state
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
