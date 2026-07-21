// dropdown
const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

menuIcon.addEventListener("click", function(){
    dropdownMenu.classList.toggle("show");
});

// login
const loginLink = document.getElementById("loginLink");
const loginModal = document.getElementById("loginModal");
const closeLoginModal = document.getElementById("closeLoginModal");

loginLink.addEventListener("click", function(e){
    e.preventDefault();
    loginModal.classList.add("show");
});

closeLoginModal.addEventListener("click", function(){
    loginModal.classList.remove("show");
});

// register
const registerLink =
document.getElementById("registerLink");
const registerModal1 =
document.getElementById("registerModal1");
const closeRegisterModal1 =
document.getElementById("closeRegisterModal1");

registerLink.addEventListener("click", function(e){
    e.preventDefault();
    loginModal.classList.remove("show");
    registerModal1.classList.add("show");

});

closeRegisterModal1.addEventListener("click", function(){
    registerModal1.classList.remove("show");
});

// back to login 1
const backToLogin1 =
document.getElementById("backToLogin1");

backToLogin1.addEventListener("click", function(e){
    e.preventDefault();
    registerModal1.classList.remove("show");
    loginModal.classList.add("show");
});

// next button
const nextBtn =
document.getElementById("nextBtn");
const registerModal2 =
document.getElementById("registerModal2");
const closeRegisterModal2 =
document.getElementById("closeRegisterModal2");

nextBtn.addEventListener("click", function(){
    registerModal1.classList.remove("show");
    registerModal2.classList.add("show");
});

closeRegisterModal2.addEventListener("click", function(){
    registerModal2.classList.remove("show");
});

// back to login 2
const backToLogin2 =
document.getElementById("backToLogin2");

backToLogin2.addEventListener("click", function(e){
    e.preventDefault();
    registerModal2.classList.remove("show");
    loginModal.classList.add("show");
});

window.addEventListener("click", function(event){
    // dropdown
    if(
        !menuIcon.contains(event.target) &&
        !dropdownMenu.contains(event.target)
    ){
        dropdownMenu.classList.remove("show");
    }

    // login modal
    if(event.target === loginModal){
        loginModal.classList.remove("show");
    }

    // register 1
    if(event.target === registerModal1){
        registerModal1.classList.remove("show");
    }

    // register 2
    if(event.target === registerModal2){
        registerModal2.classList.remove("show");
    }
});