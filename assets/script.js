/**
 * navbar
 */
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    header.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
  });
}

/**
 * Form
 */

function handleGetFormData() {
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;
  
  return {
    name,
    city,
    email,
    zipCode,
    status
  };
}

function isNumber(string) {
  return !isNaN(string);
}

function checkboxIsChecked() {
  return document.getElementById('status').checked;
}

function validateFormData(formData) {
  if (
    formData &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked()
  ) {
    return true;
  } else {
    return false;
  }
}

function submit(event) {
  const formData = handleGetFormData();
  if (!validateFormData(formData)) {
    document.getElementById('warning').innerHTML = 'Periksa form anda sekali lagi';
  } else {
    document.getElementById('warning').innerHTML = '';
    // Do something with the form data
  }
}

document.getElementById('submit-form').addEventListener('click', submit);



//index login dari local storage
if(localStorage.getItem('index_login') == 0 ){
  document.getElementById('btn-login').style = 'display:none';
  document.getElementById('btn_signout').style = 'display:block';

}else{
  document.getElementById('btn-login').style = 'display:block';
  document.getElementById('btn_signout').style = 'display:none';
}

document.getElementById('btn_signout').addEventListener('click',()=>{
  localStorage.removeItem('index_login');
  location.reload()
})