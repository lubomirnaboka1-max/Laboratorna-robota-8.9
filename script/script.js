document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');

  document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('mouseover', function () { link.style.color = '#f8b489'; });
    link.addEventListener('mouseout', function () { link.style.color = ''; });
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('contact-message').value;
      console.log('Форма відправлена:', { name, email, message });
      document.getElementById('contact-result').textContent = 'Дякуємо за ваше повідомлення! (Демонстрація)';
      contactForm.reset();
    });
  }

  const appointmentForm = document.getElementById('appointment-form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      document.getElementById('result').textContent = 'Форму заповнено правильно. Це демонстрація — дані не надсилалися.';
      appointmentForm.reset();
    });
  }

  const slides = document.querySelectorAll('#imageSlider img');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  if (slides.length && nextBtn && prevBtn) {
    let currentSlide = 0;
    function showSlide(n) {
      slides.forEach(function (slide, i) { slide.hidden = i !== n; });
    }
    nextBtn.addEventListener('click', function () {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
    prevBtn.addEventListener('click', function () {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
    showSlide(currentSlide);
  }
});
