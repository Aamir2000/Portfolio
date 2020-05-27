// @ts-nocheck
const mobile_btn = $(".navItem_wrapper > i");
const menu = $(".navItem_wrapper > ul");

const redirectContact = () => {
    window.location.href = "./index.html#contactMe";
};

const menuToggle = () => {
    $(menu).toggleClass("show");
};

$(mobile_btn).on("click", () => {
    menuToggle();
});

window.addEventListener("resize", (e) => {
    if (e.target.innerHeight > 1060) {
        $(menu.addClass("show"));
    }


});


