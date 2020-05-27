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

