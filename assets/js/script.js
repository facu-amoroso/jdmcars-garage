(function () {
  // Año en footer
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  // Marcar nav activo según data-page
  const page = document.body.getAttribute('data-page');
  document.querySelectorAll('.nav-link[data-link]').forEach(a => {
    if (a.getAttribute('data-link') === page) a.classList.add('active');
  });

  // Validación Bootstrap forms
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) { e.preventDefault(); e.stopPropagation(); }
      form.classList.add('was-validated');
    }, false);
  });

  // Filtros y orden en catálogo
  const grid = document.getElementById('catalogoGrid');
  const filtro = document.getElementById('filtroInput');
  const orden = document.getElementById('ordenSelect');

  function applyFilters() {
    const term = (filtro?.value || '').toLowerCase();
    const cards = Array.from(grid?.children || []);
    cards.forEach(c => {
      const modelo = (c.dataset.modelo || '').toLowerCase();
      c.style.display = modelo.includes(term) ? '' : 'none';
    });
  }
  function applySort() {
    const by = orden?.value || 'modelo';
    const cards = Array.from(grid?.children || []);
    cards.sort((a,b) => {
      const av = +a.dataset[by] || String(a.dataset[by]).localeCompare(String(b.dataset[by]));
      const bv = +b.dataset[by] || String(b.dataset[by]).localeCompare(String(a.dataset[by]));
      return av > bv ? 1 : av < bv ? -1 : 0;
    });
    cards.forEach(c => grid.appendChild(c));
  }

  filtro?.addEventListener('input', applyFilters);
  orden?.addEventListener('change', applySort);
})();
