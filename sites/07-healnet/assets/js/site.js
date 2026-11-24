(function(){
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }});
  }
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }});
    }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    reveals.forEach(function(el){ io.observe(el); });
  } else { reveals.forEach(function(el){ el.classList.add('in'); }); }
  document.querySelectorAll('[data-demo-form]').forEach(function(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var status = form.querySelector('.form-status');
      if (!form.checkValidity()) {
        form.reportValidity();
        if (status) { status.className='form-status show'; status.textContent='Please complete the required fields so we can route your request.'; }
        return;
      }
      if (status) {
        status.className = 'form-status show';
        status.innerHTML = '<strong>Demo form â€” nothing was sent.</strong><br>This concept site has no backend. Before launch, connect the form to a HIPAA-aware intake service or CRM, then test delivery and consent language.';
      }
      form.reset();
    });
  });
})();
