window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("activate");
    } else {
      reveals[i].classList.remove("activate");
    }
  }
}
