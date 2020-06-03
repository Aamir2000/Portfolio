// @ts-nocheck
const mobile_btn = $(".navItem_wrapper > i");
const menu = $(".navItem_wrapper > ul");

const redirectContact = () => {
	window.location.href = "./index.html#contactMe";
};

const redirectAbout = () => {
	window.location.href = "./about.html";
};

const menuToggle = () => {
	$(menu).toggleClass("show");
};

$(mobile_btn).on("click", () => {
	menuToggle();
});

$(window).on("resize", (e) => {
	if (e.target.innerHeight > 1060) {
		menuToggle();
	}
});

const cols = Array.from(document.querySelectorAll(".column-picture"));

function loadGallery() {
	fetch("./config/config.json").then(e => e.json()).then(e => {
		let Limit = e.Limit;
		let count = 0;
		for (let i = 1; i <= Limit; i++) {
			const img = document.createElement("img");
			img.setAttribute("src", `./assets/Design_Projects/Design (${i}).png`);
			img.addEventListener("click", () => {
				window.open(`${img.getAttribute("src")}`);
			});
			cols[count].appendChild(img);
			count++;
			if (count == cols.length) {
				count = 0;
			}
		}
	});
}
loadGallery();
