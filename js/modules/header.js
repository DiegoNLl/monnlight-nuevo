const header = () => {
  const header = document.querySelector('header');
  const nav = document.querySelector('.header-nav');
  const menuButton = document.getElementById('headerNavMenuIconContainer');
  const menuCloseButton = document.getElementById('headerNavMenuCloseIconContainer');
  const linkMenu = document.querySelector('.header-nav__menu-link-list');

  const openMenu = () => linkMenu.classList.add('header-nav__menu-link-list--open');
  const closeMenu = () => linkMenu.classList.remove('header-nav__menu-link-list--open');

  document.addEventListener('scroll', () => {
    header.classList.toggle('header--scroll', scrollY > 0);
    nav.classList.toggle('header-nav--scroll', scrollY > 0);
  });

  menuButton.addEventListener('click', openMenu);
  menuCloseButton.addEventListener('click', closeMenu);

  linkMenu.addEventListener('click', e => e.target.tagName === 'A' && closeMenu ());
};

export default header;