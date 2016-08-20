function zoomIn(){
  document.documentElement.style.fontSize=parseInt(getComputedStyle(document.documentElement).fontSize)+2+'px';
}
function zoomOut(){
  document.documentElement.style.fontSize=parseInt(getComputedStyle(document.documentElement).fontSize)-2+'px';
}

function closeLoginForm(){
  document.getElementById('login-form').style.display='none';
}
function showLoginForm(){
  document.getElementById('login-form').style.display='block';
  document.forms.loginForm.login.focus();
}