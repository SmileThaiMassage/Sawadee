
  // Animazione fade-in on scroll
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

  // Menu hamburger mobile
  const hamburger = document.getElementById('hamburger');
  const menuMobile = document.getElementById('menuMobile');
  if(hamburger){
    hamburger.addEventListener('click', ()=>{
      const aperto = menuMobile.classList.toggle('aperto');
      hamburger.classList.toggle('aperto', aperto);
      hamburger.setAttribute('aria-expanded', aperto);
    });
    // chiudi il menu quando si tocca un link
    menuMobile.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=>{
        menuMobile.classList.remove('aperto');
        hamburger.classList.remove('aperto');
        hamburger.setAttribute('aria-expanded','false');
      });
    });
  }
