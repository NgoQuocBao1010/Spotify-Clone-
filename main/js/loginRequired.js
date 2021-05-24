// ----------------------------------- LOGIN MODAL ----------------------------------- //
const loginPopup = () => {
    const loginModal = document.querySelector(".login-modal");
    const pageContainer = document.querySelector(".container");

    pageContainer.classList.add("blur");
    loginModal.classList.add("active");
}
const favIcon = document.querySelector(".musicInfo i");
favIcon.addEventListener("click", () => {
    if (!authenticated) {
        loginPopup();
    }
    else {
        alert("Song is added to favourite");
    }
});

const closeLogin = document.querySelector(".login-modal .close");
closeLogin.addEventListener("click", () => {
    const loginModal = document.querySelector(".login-modal");
    const pageContainer = document.querySelector(".container");

    pageContainer.classList.remove("blur");
    loginModal.classList.remove("active");
});