import { menu, vhUnit, headerOnResize } from "../__modules/menu";

// GLOBAL APP CONTROLLER
const controller = {
	init() {},
	loaded() {
		menu();
		vhUnit();
	},
	resized(e) {
		headerOnResize(e);
	},
	mouseUp(e) {},
	keyDown(e) {},
	scrolled(e) {},
};

export default controller;
