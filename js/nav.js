document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var icon = document.querySelector('.navbar-toggler ion-icon');
    var body = document.body;
    var darkOverlay = document.querySelector('.dark-overlay');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    navbarToggler.addEventListener('click', function() {
      navbarToggler.classList.toggle('active');
      if (icon.getAttribute('name') === 'menu-outline') {
        icon.setAttribute('name', 'close-outline');
        showNavbar();
      } else {
        icon.setAttribute('name', 'menu-outline');
        hideNavbar();
      }
    });
  
    function showNavbar() {
      body.classList.add('no-scroll');
      darkOverlay.classList.add('show');
      navbarCollapse.classList.add('show');
    }
  
    function hideNavbar() {
      body.classList.remove('no-scroll');
      darkOverlay.classList.remove('show');
      navbarCollapse.classList.remove('show');
    }
  
    darkOverlay.addEventListener('click', function() {
      body.classList.remove('no-scroll');
      darkOverlay.classList.remove('show');
      navbarCollapse.classList.remove('show');
      icon.setAttribute('name', 'menu-outline');
    });
  
    // Add click event listeners to nav links only for screens larger than 992px
    if (window.innerWidth >= 992) {
      navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
          // Remove active class from all links
          navLinks.forEach(function(link) {
            link.classList.remove('active');
          });
  
          // Add active class to the clicked link
          this.classList.add('active');
        });
      });
    }
  
    // Listen for window resize to apply or remove active state handling
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 992) {
        navLinks.forEach(function(link) {
          link.addEventListener('click', function(event) {
            // Remove active class from all links
            navLinks.forEach(function(link) {
              link.classList.remove('active');
            });
  
            // Add active class to the clicked link
            this.classList.add('active');
          });
        });
      } else {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
          link.removeEventListener('click', function(event) {
            navLinks.forEach(function(link) {
              link.classList.remove('active');
            });
            this.classList.add('active');
          });
        });
      }
    });
  });
  