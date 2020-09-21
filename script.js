var acc = document.getElementsByClassName("accordion");
var subacc = document.getElementsByClassName("sub-accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		/* Toggle between adding and removing the "active" class,
		to highlight the button that controls the panel */
		this.classList.toggle("active");

		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
		
		if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
		
	});
}

for (i = 0; i < subacc.length; i++) {
	subacc[i].addEventListener("click", function () {
		/* Toggle between adding and removing the "active" class,
		to highlight the button that controls the panel */
		this.classList.toggle("active");

		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
		
		if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
		
	});
}

//Get all elements with class="defaultOpen" and click on them
	document.getElementById("defaultOpen-top").click();
    document.getElementById("defaultOpen-left").click();
document.getElementById("defaultOpen-right").click();

function openTab(evt, tab_name, tab_link_type, tab_content_type) {
	//Declare all variables
	var i, tabcontent, tablinks;
	
	//Get all elements with class="tabcontent-tab_type" and hide them
	tabcontent = document.getElementsByClassName(tab_content_type);
	
	for (i = 0; i < tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}
	
	//Get all elements with class="tab-link" and remove the class .active
	tablinks = document.getElementsByClassName(tab_link_type);
	for (i = 0; i < tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
	//Show the current tab and add class active to the button that opened the tab
	document.getElementById(tab_name).style.display = "block";
	evt.currentTarget.className += " active"; 
}
function openPanel(evt, panel_name) {
	var i, panels, accordions;
	//Get all panels and hide them.
	panels = document.getElementsByClassName('component-panel');
	for (i = 0; i < panels.length; i++) {
		panels[i].style.display = "none";
	}
	
	//Get all accordions and remove active class
	accordions = document.getElementsByClassName('component-accordion');
	for (i = 0; i < accordions.length; i++) {
		accordions[i].classList.remove("activate");
	}
	//Add class active to the clicked accordion
	evt.currentTarget.classList.add("activate");
	
	//Show the panel of the button clicked and change the icon to minus
	document.getElementById(panel_name).style.display = "block";
	
}