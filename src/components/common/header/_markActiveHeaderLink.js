import { RegExps } from 'Constants/reg-exps';

export function markActiveHeaderLink() {
  const links = document.querySelectorAll('.header__main-menu-item-link');

  const pathname = window.location.pathname
    .match(RegExps.WINDOW_PATHNAME)[0]
    .replace(/(.*)\.html$/, '$1');

  if (pathname === '/' || pathname === '/index') {
    links[0].classList.add('header__main-menu-item-link_this-page');
    return;
  }

  for (let i = 1; i < links.length; i++) {
    if (pathname === links[i].dataset.pathname) {
      links[i].classList.add('header__main-menu-item-link_this-page');
      break;
    }
  }
}
