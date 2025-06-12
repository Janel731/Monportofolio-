
  // Active ScrollToPlugin
  gsap.registerPlugin(ScrollToPlugin);

  document.querySelectorAll('.anchor-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // empêche le scroll auto

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      // recupere l'instance du canvas ouvert
      const offcanvasEl = document.querySelector('.offcanvas.show');
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);

      // fermer le menu
      if(bsOffcanvas){
        bsOffcanvas.hide();

        // attendre la fermeture avant le scroll
        setTimeout(()=> {
          if(targetElement){
            gsap.to(window, {
              duration:1,
              scrollTo:{y:targetElement, offsetY:80},
              ease:"power2.inOut"
            });
          }
        }, 350);
      }else{
        // si pas de menu ouvert on scroll directement
        if(targetElement){
          gsap.to(window, {
            duration:1,
            scrollTo:{y:targetElement, offsetY:80},
            ease:"power2.inOut"
          });
        }
      }
      
    });
  });


