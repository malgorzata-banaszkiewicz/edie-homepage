let mobileIcons = document.querySelector(".header__mobile-icons");
let nav = document.querySelector(".header__nav-list");
let body = document.querySelector(".body");
let header = document.querySelector(".header");
let layoutBreakpoint = 992;
let iconOpen = "header__mobile-icons--open";
let navOpen = "header__nav-list--open";
let navClosed = "header__nav-list";
let bodyNavOpen = "body--open-nav";

//function counting header height

export const vhUnit = () => {
	document.documentElement.style.setProperty(
		"--headerHeight",
		`${header.getBoundingClientRect().height}px`
	);
};

//action for hamburger click

export const menu = () => {
	mobileIcons.addEventListener("click", () => {
		mobileIcons.classList.toggle(iconOpen);
		body.classList.toggle(bodyNavOpen);
		nav.classList.toggle(navOpen);
		nav.classList.toggle(navClosed);
	});
};

//tracking resize event

export const headerOnResize = (e) => {
	if (e.currentTarget.innerWidth > layoutBreakpoint) {
		mobileIcons.classList.remove(iconOpen);
		body.classList.remove(bodyNavOpen);
		nav.classList.remove(navOpen);
		nav.classList.add(navClosed);
	}
};
