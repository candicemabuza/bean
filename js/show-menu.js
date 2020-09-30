function slide_hidden_menu() {
	var menu, menu_width;

	menu = document.getElementById('hidden-menu-side-bar');
	menu_width = menu.style.width;
	if (menu.style.left !== '0') {
		menu.style.left = '0';
	} else {
		menu.style.left = "100px"+menu_width;
	}

}