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
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
(function () {
    emailjs.init('ZRx7Ga9NEBQSjUw5o');
})();

const contactForm = document.getElementById('contact-form');
const feedbackElement = document.querySelector('.feedback-message');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar envio automático para testes

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    // Validação dos campos
    if (!name || !email || !message) {
        feedbackElement.textContent = 'Por favor, preencha todos os campos.';
        feedbackElement.classList.add('error'); // Adiciona classe de erro
        feedbackElement.classList.remove('success');
    } else if (!validateEmail(email)) {
        feedbackElement.textContent = 'Por favor, insira um e-mail válido.';
        feedbackElement.classList.add('error');
        feedbackElement.classList.remove('success');
    } else {
        // Apenas envia a mensagem se a validação passar
        emailjs.send('service_ofrlcgn', 'template_tsw57en', {
            name: name,
            email: email,
            message: message
        })
        .then(function() {
            feedbackElement.textContent = 'Mensagem enviada com sucesso!';
            feedbackElement.classList.add('success'); // Adiciona classe de sucesso
            feedbackElement.classList.remove('error');
            contactForm.reset(); // Limpa o formulário após o envio
        }, function(error) {
            feedbackElement.textContent = 'Erro ao enviar a mensagem: ' + JSON.stringify(error);
            feedbackElement.classList.add('error');
            feedbackElement.classList.remove('success');
        });
    }
});

// Função de validação de e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
