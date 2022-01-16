(function() {
  let nav = document.querySelector('.nav');
  let navToggle = document.querySelector('.nav-toggle');
  let navItems = document.querySelectorAll('.nav__item');
  let navHighlight = document.querySelector('.nav__highlight');

  function clearHighlightText(e) {
    e.stopPropagation();

    navHighlight.style.filter = 'blur(40px)';
    setTimeout(function() {
      navHighlight.innerText = '';
    }, 50);
  }

  nav.addEventListener('mouseover', clearHighlightText);

  function changeHighlightText(e) {
    e.stopPropagation();

    let newText = this.innerText;

    navHighlight.style.filter = 'blur(40px)';
    setTimeout(function() {
      navHighlight.innerText = newText;
      navHighlight.style.filter = 'blur(0px)';
    }, 50);
  }

  for(let i = 0; i < navItems.length; i++) {
    navItems.item(i).addEventListener('mouseover', changeHighlightText);
    navItems.item(i).addEventListener('touchstart', changeHighlightText, {passive: true});
  }

  navToggle.addEventListener('click', function(e) {
    if(nav.classList.contains('nav--visible')) {
      nav.classList.remove('nav--visible');
      navToggle.classList.remove('nav-toggle--toggled');
    } else {
      nav.classList.add('nav--visible');
      navToggle.classList.add('nav-toggle--toggled');
    }
  })
})();