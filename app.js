const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('[data-category]').forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
  });
}));
document.querySelectorAll('[data-program]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#program').value = link.dataset.program;
}));
document.querySelector('#trial-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('.form-status').textContent = 'Recorrido completado. En la versión conectada, tu solicitud pasará a admisiones y recibirás una confirmación. Esta prueba no envió ni guardó tus datos.';
});
const portal = document.querySelector('#portal-dialog');
document.querySelectorAll('[data-portal]').forEach(button => button.addEventListener('click', () => {
  portal.showModal();
  document.body.classList.add('modal-open');
}));
document.querySelector('.close-dialog').addEventListener('click', () => portal.close());
portal.addEventListener('close', () => document.body.classList.remove('modal-open'));
portal.addEventListener('click', event => {
  const bounds = portal.getBoundingClientRect();
  if (event.target === portal && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) portal.close();
});
document.querySelectorAll('[data-tab]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-tab]').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
    document.getElementById(item.dataset.tab).hidden = !active;
  });
}));
