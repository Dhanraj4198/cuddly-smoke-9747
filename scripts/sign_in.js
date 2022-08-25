let g_btn = document.getElementById("google_btn");
g_btn.addEventListener("click", function () {
  window.location = "https://app.greenhouse.io/users/auth/google_oauth2";
});
function storeData() {
  let email = document.getElementById("email_input").value;
  console.log(email);
}
