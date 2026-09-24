document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  var menuBtn = document.getElementById('menuBtn');
  var mobileNav = document.getElementById('mobileNav');

  menuBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('open');
    });
  });

  // Pre-select package when a "Request This" button is clicked
  var planSelect = document.getElementById('planSelect');
  document.querySelectorAll('.package-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var plan = btn.getAttribute('data-plan');
      if (plan && planSelect) planSelect.value = plan;
    });
  });

  // Contact form submission
  var leadForm = document.getElementById('leadForm');
  var formSuccess = document.getElementById('formSuccess');
  var successContact = document.getElementById('successContact');

  leadForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var email = leadForm.querySelector('[name="email"]').value.trim();
    successContact.textContent = email || 'you';

    leadForm.hidden = true;
    formSuccess.hidden = false;
  });
});
