document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.btn-proyecto');
  const tabs = document.querySelectorAll('.proyectos-tab');

  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;

      // activar botón
      botones.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // mostrar tab correspondiente
      tabs.forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tab);
      });
    });
  });
});




