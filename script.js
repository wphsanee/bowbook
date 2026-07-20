// dropdown
const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

menuIcon.addEventListener("click", function(){
    dropdownMenu.classList.toggle("show");
});

window.addEventListener("click", function(event){
    if(
        !menuIcon.contains(event.target) &&
        !dropdownMenu.contains(event.target)
    ){
        dropdownMenu.classList.remove("show");
    }

});

// login
const loginLink = document.getElementById("loginLink");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");

loginLink.addEventListener("click", function(e){
    e.preventDefault();
    loginModal.classList.add("show");
});

closeModal.addEventListener("click", function(){
    loginModal.classList.remove("show");
});