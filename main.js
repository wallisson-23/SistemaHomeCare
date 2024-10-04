document.addEventListener('DOMContentLoaded', function () {
  // Validação do Formulário de Contato
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar envio automático para testes

      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();

      if (!name || !email || !message) {
          alert('Por favor, preencha todos os campos.');
      } else if (!validateEmail(email)) {
          alert('Por favor, insira um e-mail válido.');
      } else {
          alert('Mensagem enviada com sucesso!');
          // Aqui pode ser adicionado o código para enviar os dados para o backend
          this.reset();
      }
  });

  // Função para validar e-mail
  function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }

  // Navegação suave para âncoras de links
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetID = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetID);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Efeito de botão de "Iniciar Avaliação" no Header
  const ctaButton = document.querySelector('.header .cta-btn');
  ctaButton.addEventListener('click', function () {
      const emailInput = document.getElementById('email-header').value.trim();
      if (emailInput === '') {
          alert('Por favor, insira seu e-mail para iniciar a avaliação.');
      } else if (!validateEmail(emailInput)) {
          alert('Por favor, insira um e-mail válido.');
      } else {
          alert('Avaliação iniciada! Verifique seu e-mail para mais detalhes.');
          // Aqui você pode integrar com o backend para processar o e-mail
      }
  });
  
  // // Feedback ao clicar no botão "Conecte-se"
  // const loginBtn = document.querySelector('.login-btn');
  // loginBtn.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     alert('Função de login ainda não implementada.');
  // });

  // Efeito ao rolar a página: mudar cor do navbar
  window.addEventListener('scroll', function () {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });
});
