/* ==============================================================
   script.js
   --------------------------------------------------------------
   Três coisinhas acontecem aqui:
   1) Preenche o ano no rodapé automaticamente
   2) Abre/fecha o menu mobile (hamburger)
   3) Toca o vídeo de fundo quando ele entra na tela e pausa
      quando ele sai (economiza recursos e é mais elegante)
   ============================================================== */

/* --------------------------------------------------------------
   1) ANO AUTOMÁTICO NO RODAPÉ
   -------------------------------------------------------------- */
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* --------------------------------------------------------------
   2) MENU MOBILE (hamburger)
   -------------------------------------------------------------- */
const header = document.querySelector('.site-header');
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && header) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Fecha o menu automaticamente quando o usuário clica em um link
  // (importante no celular, senão o menu fica aberto após navegar)
  if (mainNav) {
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        header.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* --------------------------------------------------------------
   3) VÍDEO TOCA AO ROLAR A PÁGINA ATÉ ELE
   --------------------------------------------------------------
   Usamos a API "IntersectionObserver", que avisa quando um
   elemento entra ou sai da área visível da tela (viewport).
   Se o usuário tiver pedido "menos animações" no sistema
   operacional (prefers-reduced-motion), não tocamos o vídeo
   automaticamente — ele fica parado no poster.
   -------------------------------------------------------------- */
const bgVideo = document.getElementById('bgVideo');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (bgVideo && !prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // .play() retorna uma Promise; o catch evita erro no console
          // caso o navegador bloqueie o autoplay por algum motivo
          bgVideo.play().catch(() => {});
        } else {
          bgVideo.pause();
        }
      });
    },
    { threshold: 0.4 } // toca quando pelo menos 40% do vídeo estiver visível
  );

  observer.observe(bgVideo);
}
