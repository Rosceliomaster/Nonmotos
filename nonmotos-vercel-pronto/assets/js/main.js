// Toggle do menu mobile (com estado de acessibilidade)
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function setMenu(aberto) {
  if (!menuBtn || !mobileMenu) return;
  mobileMenu.classList.toggle('hidden', !aberto);
  menuBtn.setAttribute('aria-expanded', String(aberto));
  menuBtn.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    setMenu(mobileMenu.classList.contains('hidden'));
  });

  // Fecha ao clicar em qualquer link do menu
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  // Fecha ao clicar fora ou pressionar Esc
  document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
      setMenu(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenu(false);
      menuBtn.focus();
    }
  });
}

// Atualiza o ano no rodapé automaticamente
const anoAtual = document.getElementById('ano-atual');
if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}
