burger = document.querySelector('.header__burger');
menu = document.querySelector('.header__nav');
menuItem = document.querySelectorAll('.nav-header__item');

dark = document.querySelector('.bg-mob');

burger.onclick = function () {
	burger.classList.toggle('active');
	dark.classList.toggle('active');
	menu.classList.toggle('active');
}

dark.onclick = function () {
	burger.classList.toggle('active');
	dark.classList.toggle('active');
	menu.classList.toggle('active');
}

menuItem.forEach(function (el) {
	el.onclick = function () {
		burger.classList.toggle('active');
		dark.classList.toggle('active');
		menu.classList.toggle('active');
	}
});



