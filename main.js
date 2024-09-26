document.addEventListener('DOMContentLoaded', function () {
  // Scroll suave ao clicar nos links da navbar
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          window.scrollTo({
              top: targetSection.offsetTop - 80,
              behavior: 'smooth'
          });
      });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const indicators = Array.from(document.querySelectorAll('.carousel-indicator'));

    let currentSlide = 0;

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = `translateX(-${targetSlide * 100}%)`;
        indicators[currentSlide].classList.remove('active');
        indicators[targetSlide].classList.add('active');
    };

    nextButton.addEventListener('click', () => {
        const nextSlide = (currentSlide + 1) % slides.length;
        moveToSlide(track, currentSlide, nextSlide);
        currentSlide = nextSlide;
    });

    prevButton.addEventListener('click', () => {
        const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
        moveToSlide(track, currentSlide, prevSlide);
        currentSlide = prevSlide;
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            moveToSlide(track, currentSlide, index);
            currentSlide = index;
        });
    });
});

  // Validação de formulário de contato
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', function (e) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (!name || !email || !message) {
          e.preventDefault();
          alert('Por favor, preencha todos os campos.');
      } else {
          alert('Mensagem enviada com sucesso!');
      }
  });
});
