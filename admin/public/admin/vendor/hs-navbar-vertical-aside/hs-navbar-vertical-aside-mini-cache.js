const body = document.getElementsByTagName('body')[0],
  isMini =  window.localStorage.getItem('hs-navbar-vertical-aside-mini') === null ? false : window.localStorage.getItem('hs-navbar-vertical-aside-mini');

if (isMini) {
  document.body.classList.toggle('navbar-vertical-aside-mini-mode');
}